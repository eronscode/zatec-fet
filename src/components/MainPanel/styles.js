import styled from "styled-components";
import { color, font } from "styles/styleUtils";

export const MainPanelWrapper = styled.div`
  padding: 40px;
  min-height: calc(100vh - 60px);

  &.default-container {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      ${font.size(18)};
      ${font.regular}
      line-height: 21px;
      text-align: center;
      color: ${color.lightGrey};
    }
  }

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
  .table-wrapper {
    margin-top: 25px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Loader = styled.div`
  width: 100%;
  text-align: center;
  min-height: calc(100vh - 300px);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
  }
`;
