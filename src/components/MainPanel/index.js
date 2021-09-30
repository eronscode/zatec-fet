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
