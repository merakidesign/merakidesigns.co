import React from 'react'
import ArrowLink from './arrow-link'

import styles from './cta.module.css'

const Cta = () => {
  return (  
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h4>Not ready yet? Schedule a UX Consultancy Meeting and let’s discover what we could do together.</h4>
          <ArrowLink link="/about/" linkText="Schedule now"></ArrowLink>
        </div>
      </div>
    </section>
  )
}

export default Cta