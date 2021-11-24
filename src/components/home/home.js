import React from "react";
import Nav from "../nav/Nav";
import Content from "./content/content";
import Image from "./image/image";
import styles from './home.module.css';

function Home(){
    return(
        <div className={styles.home}>
         <Nav/>
         <div className={styles.main}>
             <Content/>
             <Image/>
         </div>
        </div>
    )
}

export default Home;