import React from 'react'
import { motion } from 'framer-motion'

import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}}>
          <h2 className={styles.h6}>An Experience Design Studio</h2>
          <h3>We build intuitive websites and flexible design systems for lifestyle and wellness brands.</h3>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
