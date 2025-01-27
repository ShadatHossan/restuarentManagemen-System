import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthProvider';

const PrivateRoute = ({children}) => {
    
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
       return <process className="progress w-56"></process>
    } 
    if (user) {
        return children;
     }
     return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default PrivateRoute;