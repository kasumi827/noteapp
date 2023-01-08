import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/home">ホーム</Link>
                <Link to="/login">ログイン</Link>
            </nav>
        </div>
    );
};

export default Navbar;