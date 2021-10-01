import styled from "styled-components";
import { mixins } from "styles/styleUtils";

export function ErrorUI({ onError = () => null }) {
  return (
    <ErrorContainer>
      <h1>Ooop! Something went wrong</h1>
      <button onClick={onError}>Retry</button>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 50px 0;
  h1 {
    margin: 0 0 10px 0;
  }
  button {
    border: 2px solid #000;
    padding: 5px 15px;
    ${mixins.clickable}
  }
`;
