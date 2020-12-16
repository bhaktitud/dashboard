import { SET_MENU_LIST } from './../types/index';


const initialState = {
    listMenu: [],
}

/**
 * note that mapping variable in reducers to handle the nested object update
 * is one of the solution. There is also a library to handle this problem but not necessarily needed for the sake of reducing the use of libraries in this project
 * 
 * doing this solution could impact on several factor, e.q. performance & the rule of redux (*reducers should be flattened)
 * 
 */

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