import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
const PrivateRoute = ({component: Component,auth,...rest})=>(
    <Route
    {...rest}
    render= {(props)=>(
        auth.isAuth === true ?
        (<Component {...props}/>
        ):(<Redirect to='/'/>
        ))
    }/>
);
PrivateRoute.protoTypes= {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state=>{
    return{
        auth: state.auth
    }
};

export default connect(mapStateToProps)(PrivateRoute);