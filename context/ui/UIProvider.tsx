import {FC, useReducer} from 'react'

import { UIContext, uiReducer } from './';



export interface UIState {
    sideMenuOpen: boolean;
   
}

interface Props {
    children?: React.ReactNode | undefined,
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
}



export const UIProvider:FC<Props> = ({ children }) => {
    
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({type: 'UI - Open SideBar'});
    }

    const closeSideMenu = () => {
        dispatch({type: 'UI - Close SideBar'});
    }

    return (
    <UIContext.Provider value={{ 
        //sideMenuOpen: state.sideMenuOpen
        ...state, //esto es equivalente a la accion de la linea 27 pero de manera indirecta se asign la propiedad

        //METHODS

        openSideMenu,
        closeSideMenu,
    }}>

        { children }

    </UIContext.Provider>
  )
}
