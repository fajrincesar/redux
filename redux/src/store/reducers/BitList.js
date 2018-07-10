import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../Utility';

const initState = {
    bitList: [],
    loading: false,
    error:''
}

const reducer = (state = initState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_DATA_START:
            return updateObject(state,{loading: true})
        case actionTypes.FETCH_DATA_SUCCESS:
            return updateObject(state,{
                bitList: action.kriptolist,
                loading:false
            }) 
        case actionTypes.FETCH_DATA_FAIL:
            return updateObject(state,{
                loading:false,
                error:action.error
            })
        default:
            return state;
    }
}

export default reducer