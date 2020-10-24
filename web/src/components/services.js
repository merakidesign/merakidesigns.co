import React from 'react'

import styles from './services.module.css'

const Services = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div>
          <span className={styles.number}>01</span>
          <h5 className={styles.h5}>Strategy Session</h5>
          <p>We help founders define their idea, gear up for launch and build brands worth paying attention to.</p>
        </div>
        <div>
          <span className={styles.number}>02</span>
          <h5 className={styles.h5}>Product Design</h5>
          <p>We help founders define their idea, gear up for launch and build brands worth paying attention to.</p>
        </div>
        <div>
          <span className={styles.number}>03</span>
          <h5 className={styles.h5}>Web Development</h5>
          <p>We help founders define their idea, gear up for launch and build brands worth paying attention to.</p>
        </div>
      </div>
    </section>
  )
}

export default Services