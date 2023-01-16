import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/Memory.png";
import { auth } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({isAuth}) => {
    return (
        <div className="nav">
            <div className="left">
                <Link to="/home" className="nav1"><img src={logo}></img></Link>
            </div>
            <div className="right">
            <Link to="/home" className="note">新規投稿する <FontAwesomeIcon icon={faCirclePlus} /></Link>
                    <Link to="/user" className="nav2">
                        マイページ
                    </Link>
                {!isAuth ? (
                    <Link to="/login" className="nav3"><FontAwesomeIcon icon={faRightToBracket} /> ログイン</Link>
                ):(
                    <Link to="/logout" className="nav3"><FontAwesomeIcon icon={faRightToBracket} /> ログアウト</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;