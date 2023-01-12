import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const User = ({ uid, displayName,isAuth }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("./login");
        }
    }, []);
  return (
      <div className="login">   
          <p><img src={auth.currentUser.photoURL}></img></p>
          <p>id： {uid}</p>
          <p>名前：{displayName}</p>
    </div>
  )
}

export default User;