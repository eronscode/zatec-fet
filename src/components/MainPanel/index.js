import React, { useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";

import {
  MainPanelWrapper,
  MainPanelContainer,
  MainPanelRow,
  Loader,
} from "./styles";
import { useAppContext } from "context/app.context";
import Filter from "components/Filter";
import Table from "components/Table";
import { columns } from "config/tableConfig";
import { useFetchOrgRepos } from "hooks/useFetchOrgRepos";
import loader from "assets/images/loader.gif";
import { handleFilterOptions, handleFilterStorage } from "utils/methods";
import Select from "components/SelectDropDown";
import TImeLineChart from "components/Charts/TimelineChart";
import ScatterChart from "components/Charts/ScatterChart";
import { ErrorUI } from "utils/placeholders";

const INITIAL_FILTER_STATE = {
  name: "",
  min: "",
  max: "",
};

const CHART_OPTIONS = [
  { value: "timeline-chart", label: "TImeline Chart" },
  { value: "scatter-chart", label: "Scatter Chart" },
];

function MainPanel() {
  /*
    # ------------------------------------------------------------ #
    # State Declarations                                           #
    # ------------------------------------------------------------ #
  */
  const [value, setValue] = useState(INITIAL_FILTER_STATE);
  const [chartType, setChartType] = useState("timeline-chart");
  const { name, min, max } = value;
  const { organization, organizationFilter, setOrganizationFilter } =
    useAppContext();
  const { data, isLoading, isError, handleFetchOrgRepos } = useFetchOrgRepos(
    organization?.login
  );

  /*
    # ------------------------------------------------------------ #
    # Tansform and Extract specific data from API                  #
    # ------------------------------------------------------------ #
  */
  const tableData = data?.map((item) => {
    return {
      repo_name: item.name,
      repo_issue: item.open_issues,
      repo_stars: item.stargazers_count,
      created_at: item.created_at,
      updated_at: item.updated_at,
    };
  });

  /*
    # ------------------------------------------------------------ #
    # Handles repository input filters                                        #
    # ------------------------------------------------------------ #
  */

  const filteredData = handleFilterOptions(tableData, name, max, min);

  const timeLineChartData = filteredData?.map((item) => {
    return [
      item.repo_name,
      new Date(item.created_at),
      new Date(item.updated_at),
    ];
  });
  console.log({ timeLineChartData });

  /*
    # ------------------------------------------------------------ #
    # Store filter option for each organization selected            #
    # ------------------------------------------------------------ #
  */
  useEffect(() => {
    const data = {
      name,
      min,
      max,
      organization,
      organizationFilter,
      setOrganizationFilter,
    };
    handleFilterStorage(data);
  }, [name, min, max]); // eslint-disable-line react-hooks/exhaustive-deps

  /*
    # ----------------------------------------------------------------- #
    # set initial filter state if filter for selected orgaization exist #
    # or doesn't exist                                                  #
    # ----------------------------------------------------------------- #
  */
  useEffect(() => {
    const org = organizationFilter.filter(
      (item) => item.organization === organization?.login
    );
    if (!isEmpty(org)) {
      const newState = {
        name: org[0]?.filters.name,
        max: org[0]?.filters.max,
        min: org[0]?.filters.min,
      };
      setValue(newState);
    } else {
      setValue(INITIAL_FILTER_STATE);
    }
  }, [organization?.login]); // eslint-disable-line react-hooks/exhaustive-deps

  function toggleChart(e) {
    setChartType(e.target.value);
  }

  return !isEmpty(organization) ? (
    <MainPanelWrapper>
      <h1>{organization?.login}</h1>
      <MainPanelContainer>
        <MainPanelRow>
          <Filter value={value} setValue={setValue} />
        </MainPanelRow>
        <MainPanelRow>
          <div className='row-padding'>
            <Select
              className='select-dropdown'
              value={chartType}
              options={CHART_OPTIONS}
              onChange={toggleChart}
            />
          </div>
        </MainPanelRow>
      </MainPanelContainer>
      <MainPanelContainer>
        {isLoading ? (
          <Loader>
            <img src={loader} alt='loading...' />
          </Loader>
        ) : isError ? (
          <ErrorUI onError={() => handleFetchOrgRepos(organization?.login)} />
        ) : (
          <>
            <MainPanelRow>
              <div className='table-wrapper'>
                <Table tableColumns={columns} tableData={filteredData} />
              </div>
            </MainPanelRow>
            <MainPanelRow>
              <div className='row-padding chart-wrapper'>
                {timeLineChartData.length !== 0 &&
                  renderChart(chartType, timeLineChartData)}
              </div>
            </MainPanelRow>
          </>
        )}
      </MainPanelContainer>
    </MainPanelWrapper>
  ) : (
    <MainPanelWrapper className='default-container'>
      <div>
        <p>Search for organization</p>
      </div>
    </MainPanelWrapper>
  );
}

function renderChart(chart, timeLineChartData) {
  switch (chart) {
    case "timeline-chart":
      return (
        <TImeLineChart
          height={500}
          chartLabel={[
            { type: "string", id: "Repository" },
            { type: "date", id: "Start" },
            { type: "date", id: "End" },
          ]}
          chartData={timeLineChartData}
        />
      );
    case "scatter-chart":
      return <ScatterChart />;

    default:
      return <p>Invalid Chart</p>;
  }
}

export default MainPanel;
