import styled from "styled-components";
import { color, font, mixins } from "styles/styleUtils";

export const TableWrapper = styled.div`
  .pagination {
    margin: 20px 0 0 0;
    button {
      ${mixins.clickable}
    }
    span {
      ${font.size(12)}
      line-height: 14px;
    }
  }

  .noData {
    ${font.size(12)}
    line-height: 14px;
    color: ${color.lightGrey};
    text-align: center;
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  th {
    border-bottom: 1px solid ${color.black};
    padding: 10px 10px;
    p {
      ${font.size(12)}
      ${font.bold}
      line-height: 14px;
      text-align: left;
      span {
        margin-left: 4px;
      }
    }
    :hover {
      background: ${color.lightBlue};
    }
  }
  tbody tr {
    background: ${color.white};
  }
  td {
    padding: 13px 10px;
    ${font.size(12)}
    line-height: 14px;
  }
`;
