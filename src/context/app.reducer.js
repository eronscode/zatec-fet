export const INITIAL_STATE = {
  organization: null,
  organizationFilter: [],
};

export function appReducer(state, action) {
  switch (action.type) {
    case "SET_ORGANIZATION":
      return { ...state, organization: action.data };
    case "SET_ORGANIZATION_FILTER":
      return { ...state, organizationFilter: action.data };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
