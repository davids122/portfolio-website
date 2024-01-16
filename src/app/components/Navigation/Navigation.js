import React from "react";
import styles from './Navigation.module.css';
import Link from 'next/link';
import { motion, useMotionValue } from "framer-motion"

export default function Navigation() {

  const navigationVariant = {
    hide: {
      opacity: 0,
      y: -80,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <main className={styles.topNav}>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={navigationVariant}>
          <ul className={styles.links}>
            <li className={styles.homeBox}>David Sprague</li>
            <li className={styles.linkBox}><Link className= {styles.link} href="#contact">Contact</Link></li>
            <li className={styles.linkBox}><Link className= {styles.link} href="#projects">Projects</Link></li>
            <li className={styles.linkBox}><Link className= {styles.link} href="#about">About</Link></li>
       </ul>

       <hr className={styles.blueLine}></hr>
        </motion.div>
      
       
        

    </main>
  );
}