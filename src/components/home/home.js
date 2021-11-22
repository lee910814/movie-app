import React from "react";
import Nav from "../nav/Nav";
import styles from './home.module.css';

function Home(){
    return(
        <div className={styles.home}>
         <Nav/>
        </div>
    )
}

export default Home;