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
import Chart from "react-google-charts";

const INITIAL_STATE = {
  name: "",
  min: "",
  max: "",
};

function MainPanel() {
  /*
    # ------------------------------------------------------------ #
    # State Declarations   #
    # ------------------------------------------------------------ #
  */
  const [value, setValue] = useState(INITIAL_STATE);
  const { name, min, max } = value;
  const { organization, organizationFilter, setOrganizationFilter } =
    useAppContext();
  const { data, isLoading } = useFetchOrgRepos(organization?.login);

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
    };
  });

  /*
    # ------------------------------------------------------------ #
    # Handles repository input filters                                        #
    # ------------------------------------------------------------ #
  */

  const filteredData = handleFilterOptions(tableData, name, max, min);

  /*
    # ------------------------------------------------------------ #
    # Store filter option for each repository selected            #
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
    # set initial filter state if filter for selected orgaization exist  #
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
      setValue(INITIAL_STATE);
    }
  }, [organization?.login]); // eslint-disable-line react-hooks/exhaustive-deps

  const chartData = [
    ["X", "Y"],
    [0.785882, 0.355928],
    [0.785882, 0.346507],
    [0.785882, 0.355928],
    [0.785882, 0.703251],
    [0.785028, 0.599739],
    [0.785028, 0.512527],
    [0.785882, 0.346507],
    [0.785882, 0.346507],
    [0.785882, 0.355928],
    [0.785882, 0.355928],
    [0.785882, 0.355928],
    [0.785882, 0.355928],
    [0.8905, 0.556761],
    [0.785882, 0.613288],
    [0.785028, 0.599739],
    [0.8905, 0.598812],
    [0.785028, 0.643674],
  ];

  chartData.forEach(function (row, index) {
    if (index === 0) {
      // add column heading
      row.push({
        role: "style",
        type: "string",
      });
    } else {
      // add color for row
      if (row[1] >= 0.1 && row[1] <= 2.5) {
        row.push("blue");
      } else if (row[1] > 2.5 && row[1] <= 3.5) {
        row.push("red");
      } else {
        row.push("black");
      }
    }
  });

  return !isEmpty(organization) ? (
    <MainPanelWrapper>
      <h1>{organization?.login}</h1>
      <MainPanelContainer>
        <MainPanelRow>
          <Filter value={value} setValue={setValue} />
        </MainPanelRow>
        <MainPanelRow>
          <div className='plot-section'>select</div>
        </MainPanelRow>
      </MainPanelContainer>
      <MainPanelContainer>
        {isLoading ? (
          <Loader>
            <img src={loader} alt='loading...' />
          </Loader>
        ) : (
          <>
            <MainPanelRow>
              <div className='table-wrapper'>
                <Table tableColumns={columns} tableData={filteredData} />
              </div>
            </MainPanelRow>
            <MainPanelRow>
              <Chart
                width={"600px"}
                height={"400px"}
                chartType='ScatterChart'
                loader={<div>Loading Chart</div>}
                data={chartData}
                options={{
                  title: "Age vs. Weight comparison",
                  hAxis: { title: "Age", scaleType: "log" },
                  vAxis: {
                    scaleType: "log",
                  },
                  legend: "none",
                }}
                rootProps={{ "data-testid": "1" }}
              />
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

export default MainPanel;
