import styled from "styled-components";
import { color, font } from "styles/styleUtils";

export const MainPanelWrapper = styled.div`
  padding: 40px;
  h1 {
    ${font.bold}
    ${font.size(18)};
    line-height: 21px;
    color: ${color.black};
    margin-bottom: 40px;
  }
`;
export const MainPanelContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const MainPanelRow = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
