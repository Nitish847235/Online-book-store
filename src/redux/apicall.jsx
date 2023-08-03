import { publicRequest } from "../request"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"



export const authLogin = async (user,dispatch)=>{
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login',user);
        if(res && res.data && res.data.status==='SUCCESS'){
            dispatch(loginSuccess(res.data))
            localStorage.setItem('accessToken',res.data.data.token)
        }
        return res
    } catch (error) {
        dispatch(loginFailure())
        return error
    }
}

export const authRegister = async (user)=>{
    try {
        const res = await publicRequest.post('/auth/register',user);
        return res;
    } catch (error) {
        return error;
    }
}