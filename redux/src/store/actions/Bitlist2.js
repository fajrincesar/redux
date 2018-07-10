import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios';

export const fetchCryptoListStart = () => {
    return {
        type:actionTypes.FETCH_DATA_START
    }
}

export const fetchCryptoListSuccess = kriptolist =>{
    return {
        type:actionTypes.FETCH_DATA_SUCCESS,
        kriptolist:kriptolist
    }
}

export const fetchCryptoListFail = err =>{
    return {
        type:actionTypes.FETCH_DATA_FAIL, 
        error:err
    }
}

export const fetchCryptoList = () =>{
    return dispatch =>{
        dispatch(fetchCryptoListStart())
        axios.get()
        .then(res =>{
            console.log('cek', res.data.data)
            const kripto = res.data.data
            dispatch(fetchCryptoListSuccess(kripto))
        })
        .catch(err =>{
            dispatch(fetchCryptoListFail(err))
        })
    }
}
