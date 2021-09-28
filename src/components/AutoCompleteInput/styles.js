import styled from "styled-components";
import { color, font, mixins } from "styles/styleUtils";

export const SuggestionsWrapper = styled.div`
  background: ${color.white};
  border: 1px solid ${color.lightGrey};
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 10px;
  height: auto;
  max-height: 200px;
  ${mixins.scrollableY}
  ${mixins.customScrollbar}
  .no-results {
    font-style: italic;
    color: ${color.lightGrey};
    padding: 13px 10px;
  }
  img {
    width: 30px;
    margin: 0 auto;
    display: block;
  }
`;

export const SuggestionsList = styled.div`
  li {
    color: ${color.black};
    padding: 13px 10px;
    cursor: pointer;
    font-size: ${font.size(12)};
    line-height: 14px;
    ${mixins.clickable};
    &:hover {
      background: ${color.lightBlue};
    }
  }
`;
