import React from "react";
import styles from './Home.module.css';
import Image from 'next/image'
import github from '../../public/github.png'
import LinkedIn from '../../public/LinkedIn.png'
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion"

export default function HomePage() {

  const iconVariant = {
    hide: {
      opacity: 0,
      x: -30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <main className={styles.home}>
      {/* Icons Animation */}
      <div className={styles.icons}>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={iconVariant}>

          <div className={styles.iconsBox}>
            <Link className={styles.iconLink} href={'https://github.com/davids122'}>
              <Image className={styles.iconImg} src={github} alt="My Github" />
            </Link>
            <Link className={styles.iconLink} href={'https://linkedin.com'}>
              <Image className={styles.iconImg} src={LinkedIn} alt="My LinkedIn" />
            </Link>
          </div>

        </motion.div>
      </div>
      <div className={styles.name}>
        <div className={styles.nameBox}>
          <p className={styles.hello}>
            Hi
          </p>
          <p className={styles.david}>
            I'm David
          </p>
        </div>

      </div>
    </main>
  );
}
