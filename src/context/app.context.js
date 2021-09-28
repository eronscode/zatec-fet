import { createContext, useReducer, useContext } from "react";
import { INITIAL_STATE, appReducer } from "./app.reducer";

const AppContext = createContext();

function useAppActions() {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  function setOrganization(data) {
    dispatch({ type: "INITIALIZE_PRODUCT", data });
  }

  return {
    state,
    setOrganization,
  };
}

function AppProvider(params) {
  const { state, ...restProps } = useAppActions();

  const value = {
    organization: state.organization,
    ...restProps,
  };
  return <AppContext.Provider value={value} {...params} />;
}

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useAppContext must be used with the AppProvider  component"
    );
  }

  return context;
}

export { AppProvider, useAppContext };
