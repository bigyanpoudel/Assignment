import React from 'react'
import {useDispatch} from 'react-redux';
import {logout} from './store/action'
const Dashboard = ({history}) => {
    const dispatch = useDispatch();
    return (
        <div className="Dashboard">
                <h1>Welcome to Dashboard</h1>
                <button className="btn" onClick={(e)=>{ e.preventDefault(); dispatch(logout())}}>Logout</button>
        </div>
    )
}

export default Dashboard
