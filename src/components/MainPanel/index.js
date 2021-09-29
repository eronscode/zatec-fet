import React from "react";
import isEmpty from "lodash/isEmpty";
import { MainPanelWrapper, MainPanelContainer, MainPanelRow } from "./styles";
import { useAppContext } from "context/app.context";
import Filter from "components/Filter";

function MainPanel() {
  const { organization } = useAppContext();

  return !isEmpty(organization) ? (
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
          <p>Table</p>
        </MainPanelRow>
        <MainPanelRow>
          <p>pot</p>
        </MainPanelRow>
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
