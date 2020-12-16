import { SET_MENU_LIST } from './../types/index';


const initialState = {
    listMenu: [],
}

export const reducers = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case SET_MENU_LIST:
            return {
                ...state,
                listMenu: payload.map(menu => {
                    if(menu.childs){
                        menu.childs.map(firstChild => {
                            if(firstChild.childs){
                                firstChild.childs.map(secondChild => {
                                    if(secondChild.childs){
                                        secondChild.childs.map(thirdChild => {
                                            return thirdChild
                                        })
                                    } else {
                                        return secondChild
                                    }
                                })
                            } else {
                                return firstChild
                            }
                        })
                    } 
                    return menu
                })
            }
        default:
            return state;
    }
}