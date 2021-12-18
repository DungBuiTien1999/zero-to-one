import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

//WrappedComponent: the component is wrapped
//roleArr: the array contains roles
const WithAuthenticate = (WrappedComponent, roleArr) => {
  const AuthenticatedRoute = (props) => {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  const role = localStorage.getItem('role');;
  const history = useHistory();
  
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (username && password && roleArr.includes(role, 0)) {
        setLoading(false);
      } else {
        history.push('/login');
      }
    }, [username, password,history, role])

    return (
      loading ? <div>Loading...</div> : <WrappedComponent {...props} />
    )
  }
  return AuthenticatedRoute;
};

export default WithAuthenticate;