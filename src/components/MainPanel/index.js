import React, { useState } from "react";
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
import { handleFilterOptions } from "utils/methods";

function MainPanel() {
  const [value, setValue] = useState({
    name: "",
    min: "",
    max: "",
  });
  const { name, min, max } = value;
  const { organization } = useAppContext();
  const { data, isLoading } = useFetchOrgRepos(organization?.login);
  // const {
  //   setValue: setSearchValue,
  //   data: FilterRepoData,
  //   setData,
  //   isLoading: isLoadingFilter,
  //   handleSearch,
  // } = useSearch(filterOrgRepos);

  // const searchPayload = {
  //   query: name,
  //   org: organization?.login,
  // };

  const tableData = data?.map((item) => {
    return {
      repo_name: item.name,
      repo_issue: item.open_issues,
      repo_stars: item.stargazers_count,
    };
  });
  // const filterTableData = FilterRepoData?.items?.map((item) => {
  //   return {
  //     repo_name: item.name,
  //     repo_issue: item.open_issues,
  //     repo_stars: item.stargazers_count,
  //   };
  // });

  const filteredData = handleFilterOptions(tableData, name, max, min);

  console.log({ filteredData });

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
              <p>pot</p>
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
