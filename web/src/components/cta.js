import React from 'react'

import styles from './cta.module.css'

const Cta = () => {
  return (  
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.subgrid}>
          <div className={styles.box}>
            <h4>Not ready yet? Schedule a UX Consultancy Meeting and let’s discover what we could do together.</h4>
            <a href="#">Schedule now &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta