'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Navigation from "./components/Navigation/Navigation";
import HomePage from './components/Home/HomePage';
import About from './components/About/About'
import { Play } from 'next/font/google';
import { useScroll } from "framer-motion"

import { motion, useMotionValue } from "framer-motion"


function Home() {

  const navigationVariant = {
    hide: {
      opacity: 0,
      y: -60,
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
    <main className={styles.main}>
      <Navigation />
      <HomePage />
      <About />
    </main>
  )
}

export default Home;
