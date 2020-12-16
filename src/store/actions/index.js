
import { SET_MENU_LIST } from './../types/index';

export const setMenuList = (newMenuState) => {
    return {
        type: SET_MENU_LIST,
        payload: newMenuState
    }
}