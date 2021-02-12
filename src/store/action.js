
import {USER} from '../UserModal';

export const authActionCreator = (data)=> dispatch=>{
    const {email,password} = data;
    const isUser = USER.find((u)=> u.email === email);
    if(!isUser)
    {
        dispatch({
            type:"ERROR",
            payload:"User not registered"
        })
    }else{
        if(password === isUser.password)
        {
            localStorage.setItem("user",JSON.stringify(data));
            dispatch({
                type:"SUCCESS",
                payload:data
            })
           
        }else{
            dispatch({
                type:"ERROR",
                payload:"Invalid Credential"
            })
        }
    }

}
export const logout = ()=>dispatch=>{
    localStorage.removeItem("user");
    dispatch({
        type:"LOGOUT",
        payload:{}
    })
}