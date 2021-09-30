import { createContext, useReducer, useContext } from "react";
import { INITIAL_STATE, appReducer } from "./app.reducer";

const AppContext = createContext();

function useAppActions() {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  function setOrganization(data) {
    dispatch({ type: "SET_ORGANIZATION", data });
  }

  function setOrganizationFilter(data) {
    dispatch({ type: "SET_ORGANIZATION_FILTER", data });
  }

  return {
    state,
    setOrganization,
    setOrganizationFilter,
  };
}

function AppProvider(params) {
  const { state, ...restProps } = useAppActions();

  const value = {
    organization: state.organization,
    organizationFilter: state.organizationFilter,
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
