import React from 'react'
import { Link } from 'gatsby'

import styles from './arrow-link.module.css'

const ArrowLink = ({ link, linkText }) => {
  return (
    <Link className={styles.link} to={link}>{linkText} <span className={styles.linkArrow}>&rarr;</span></Link>
  )
}

export default ArrowLink