import React from 'react'
import { Link } from 'gatsby'

import styles from './arrow-link.module.css'

const ArrowLink = ({ link, linkText, external }) => {
  
  return (
    external 
      ? <a className={styles.link} href={link} target="_blank">{linkText} <span className={styles.linkArrow}>&rarr;</span></a> 
      : <Link className={styles.link} to={link}>{linkText} <span className={styles.linkArrow}>&rarr;</span></Link>
  )
}

export default ArrowLink