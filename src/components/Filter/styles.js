import styled from "styled-components";
import { font } from "styles/styleUtils";

export const FilterWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .form-wrap {
    padding: 0 20px 0 0;
    margin: 10px 0;
    width: 50%;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
  }
  .form-wrap label {
    ${font.bold};
    ${font.size(12)};
    line-height: 14px;
    margin-bottom: 4px;
    display: block;
  }
  .num-filter {
    display: flex;
  }
  .num-filter > div {
    margin-right: 30px;
    width: 70px;
  }
`;
