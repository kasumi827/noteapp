import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { getAuth, updateProfile } from "firebase/auth";

const User = ({ uid, displayName,isAuth,auth }) => {
    const navigate = useNavigate();
    console.log(auth.currentUser.photoURL);

    useEffect(() => {
        if (!isAuth) {
            navigate("./login");
        }
    }, []);
  return (
      <div className="user">  
        <div className="userBox">    
          {/* <p className="userImg"><img src={auth.currentUser.photoURL}></img></p> */}
              <table>
              <tbody>
                <tr className="border">
                <th>id</th>
                <td>{uid}</td>
                </tr>
                <tr>
                <th>名前</th>
                <td>{displayName}</td>
                </tr>
                </tbody>
          </table>
        </div>
    </div>
  )
}

export default User;