import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {KEY_TOKEN} from '../../constFile';

const ProtectedRoute = ({component:Component, ...rest}) => {
    return ( 
        <Route {...rest} render={ (props) => {
            if(sessionStorage.getItem(KEY_TOKEN) != null){
                return <Component {...props}/>
            }else{
                return <Redirect to={{
                    pathname: "/",
                    state:{
                        from: props.location
                    }
                }}/>
            }
          
        }}></Route> 
     );
}
 
export default ProtectedRoute;