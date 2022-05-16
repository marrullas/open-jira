import { UIState } from ".";

type UIActionType =
  | { type: "UI - Open SideBar" }
  | { type: "UI - Close SideBar" };

export const uiReducer = (state: UIState, action: any): UIState => {
  switch (action.type) {
    case "UI - Open SideBar":
      return {
        ...state,
        sideMenuOpen: true,
      };

      break;
    case "UI - Close SideBar":
      return {
        ...state,
        sideMenuOpen: false,
      };

      break;
    default:
      return state;
  }
};
