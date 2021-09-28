export const INITIAL_STATE = {
  organization: null,
};

export function appReducer(state, action) {
  switch (action.type) {
    case "SET_ORGANIZATION":
      return { ...state, organization: action.data };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
