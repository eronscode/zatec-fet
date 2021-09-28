export const INITIAL_STATE = {
  organization: null,
};

export function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, organization: action.data };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
