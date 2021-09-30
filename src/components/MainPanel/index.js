import React from "react";
import isEmpty from "lodash/isEmpty";
import { MainPanelWrapper, MainPanelContainer, MainPanelRow } from "./styles";
import { useAppContext } from "context/app.context";
import Filter from "components/Filter";
import Table from "components/Table";

function MainPanel() {
  const { organization } = useAppContext();
  const data = [
    {
      col1: "aello",
      col2: 100,
    },
    {
      col1: "jeact-table",
      col2: 30,
    },
    {
      col1: "mhatever",
      col2: 50,
    },
    {
      col1: "aello",
      col2: 100,
    },
    {
      col1: "jeact-table",
      col2: 30,
    },
    {
      col1: "mhatever",
      col2: 50,
    },
  ];

  const columns = [
    {
      Header: "Column 1",
      accessor: "col1", // accessor is the "key" in the data
      style:{
        width: '20%'
      },
      width:100
    },
    {
      Header: "Column 2",
      accessor: "col2",
    },
  ];

  // !isEmpty(organization) ? (
  return (
    <MainPanelWrapper>
      <h1>Name of organisation</h1>
      <MainPanelContainer>
        <MainPanelRow>
          <Filter />
        </MainPanelRow>
        <MainPanelRow>
          <div className='plot-section'>select</div>
        </MainPanelRow>
      </MainPanelContainer>
      <MainPanelContainer>
        <MainPanelRow>
          <Table tableColumns={columns} tableData={data} />
        </MainPanelRow>
        <MainPanelRow>
          <p>pot</p>
        </MainPanelRow>
      </MainPanelContainer>
    </MainPanelWrapper>
  );
  // ) : (
  //   <MainPanelWrapper className='default-container'>
  //     <div>
  //       <p>Search for organization</p>
  //     </div>
  //   </MainPanelWrapper>
  // );
}

export default MainPanel;
