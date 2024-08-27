import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const WithRole = ({ component: Component, allowedRoles, ...rest }) => {
    const [redirectPath,setRedirectPath]=useState(null)
    const user = JSON.parse(sessionStorage.getItem('user'));
    //   console.log('User:', user);

    useEffect(()=>{
        if (user) {
            if (!allowedRoles.includes(user.role)) {
                toast.warning('Access Denied', { toastId: 'accessDenied' });
                setTimeout(() => {
                    if (user.role === "admin") {
                        setRedirectPath("/admin/order");
                    } else {
                        setRedirectPath("/");
                    }
                }, 800);
            }
        } else if (!allowedRoles.includes('guest')) {
            toast.warning('Access Denied', { toastId: 'accessDenied' });
            setTimeout(() => {
                setRedirectPath("/login");
            }, 800);
        } 
    },[user,allowedRoles])

    if ((user && allowedRoles.includes(user.role)) || (!user && allowedRoles.includes('guest'))) {
        return <Component {...rest} />;
    } else {
        return <Navigate to={redirectPath} />;
    }

};

export default WithRole;
