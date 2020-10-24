import React from 'react'

import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div>
          <h2 className={styles.h6}>An Experience Design Studio</h2>
          <h3>We design powerful strategy, customer experience and flexible design systems for contemporary brands and platforms.</h3>
        </div>
      </div>
    </section>
  )
}

export default Hero
