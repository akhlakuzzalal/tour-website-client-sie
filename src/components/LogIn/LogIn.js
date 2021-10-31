import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {
   const location = useLocation();
   const history = useHistory();
   const ridirect_url = location.state?.from || '/home';
   const { SignInWithGoogle, setUser, setLoading } = useAuth()

   const LogIinWithGoogle = () => {
      SignInWithGoogle()
         .then(result => {
            setUser(result.user);
            history.push(ridirect_url);
         })
         .catch(errors => console.log(errors.message))
         .finally(setLoading(false))
   }

   return (
      <div className="my-5 py-5">
         <h4>You have to Log In First</h4>
         <h2>Please Log In</h2>
         <button className="btn btn-info" onClick={LogIinWithGoogle}>Log in with Google</button>
      </div>
   );
};

export default LogIn;