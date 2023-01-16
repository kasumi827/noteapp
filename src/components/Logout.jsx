import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";

const Logout = ({ setIsAuth }) => {
    const navigate = useNavigate();
    
    const logout = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate("/");
        });
    };

  return (
      <div className="login logout">
           <button onClick={logout}><p>ログアウト</p></button>
      </div>
  )
}

export default Logout;