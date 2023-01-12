import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({isAuth}) => {
    return (
        <div className="nav">
            <div className="left">
                <Link to="/home" className="nav1">ホーム</Link>
            </div>
            <div className="right">
                <Link to="/user" className="nav2">ユーザー情報</Link>
                {!isAuth ? (
                    <Link to="/login" className="nav3">ログイン</Link>
                ):(
                    <Link to="/logout" className="nav3">ログアウト</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;