import React,{useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {authActionCreator} from './store/action';
const Login = ({history}) => {
    const [email,SetEmail]=useState(null);
    const [password,SetPassword]=useState(null);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const {error} = auth;
   const submitHandler = (e)=>{
        e.preventDefault();
        const user = {
            email,
            password
        }
        dispatch(authActionCreator(user));
    }
    useEffect(()=>{
        if(auth.isAuth){
            history.push("/dashboard");
        }
    },[auth,history])
    return (
        <div className="Login">
            <form onSubmit={submitHandler}>
                 {error&& <p>{error}</p>}
                <div className="form-group">
                    <input type="email" name="email" required  onChange={(e)=> SetEmail(e.target.value)}/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-group">
                    <input type="password" name="password" required onChange={(e)=> SetPassword(e.target.value)} />
                    <label htmlFor="password" >Password</label>
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    )
}

export default Login
