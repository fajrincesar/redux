import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authstart = () => {
    return {
        type:actionTypes.AUTH_START
    }
}

export const authsuccess = (token, userID) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idtoken: token,
        userID: userID
    }
}

export const authfail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error:error
    }
}

export const authlogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userID')
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const authtimeout = (expiretime) => {
    return dispatch => {
        setTimeout(() =>{
            dispatch(authlogout())
        }, expiretime * 1000);
    }
} 

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authstart());
        const authdata = {
            email:email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAYNLyGQ33d2R2UmsfKDoc1mcHxAYP5Fl4'
           
        axios.post(url, authdata).then(res => {
            console.log(res);
            dispatch(authsuccess(res.data.idtoken, res.data.localId))
        })
        .catch(err => {
            dispatch(authfail(err))
        })
    }
}

export const authcheckstate = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(authlogout())
        }
        else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(authlogout())
            } else {
                const userID = localStorage.getItem('userID')
                dispatch(authsuccess(token, userID))
                dispatch(authtimeout((expirationDate.getTime()- new Date().getSeconds()) / 1000));
            }
        }
    }
}