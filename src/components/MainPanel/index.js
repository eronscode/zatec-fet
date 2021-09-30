import React, { useEffect } from "react";
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

function MainPanel() {
  const { organization } = useAppContext();
  const { data, isLoading } = useFetchOrgRepos(organization?.login);

  const transformTableData = data?.map((item) => {
    return {
      repo_name: item.name,
      repo_issue: item.open_issues,
      repo_stars: item.stargazers_count,
    };
  });

  return !isEmpty(organization) ? (
    <MainPanelWrapper>
      <h1>{organization?.login}</h1>
      <MainPanelContainer>
        <MainPanelRow>
          <Filter />
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
                <Table tableColumns={columns} tableData={transformTableData} />
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
