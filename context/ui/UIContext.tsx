import { createContext } from "react";

interface ContextProps{ 
    sideMenuOpen: boolean

    //Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);


