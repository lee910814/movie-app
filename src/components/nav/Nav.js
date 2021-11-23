import React from "react";
import { Link } from "react-router-dom";
import styles from './nav.module.css';

function Nav(){
    return(
        <div className={styles.nav}>
            <Link to="/home" style={{ textDecoration: 'none' }}>
            <h1 className={styles.logo}>Movie App</h1>
            </Link>
            <h3 className={styles.login}>로그인</h3>
        </div>
    )
}

export default Nav;