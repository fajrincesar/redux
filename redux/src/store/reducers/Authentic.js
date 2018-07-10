import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../Utility';

const initState = {
    token: null,
    userID: null,
    error: null,
    loading: false,
}

const reducer = (state = initState, action) => {
    switch (action.type){
        case actionTypes.AUTH_START:
        return updateObject(state,{error:null, loading: true})
    case actionTypes.AUTH_SUCCESS:
        return updateObject(state,{
            token: action.idtoken,
            userID: action.userID,
            error: null,
            loading:false
        }) 
    case actionTypes.AUTH_FAIL:
        return updateObject(state,{
            loading:false,
            error:null
        })
    case actionTypes.AUTH_LOGOUT:
        return updateObject(state,{
            token: null,
            userID: null
        })
    default:
        return state;
    }
}

export default reducer;