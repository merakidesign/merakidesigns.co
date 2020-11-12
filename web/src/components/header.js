import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </h1>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <AnimatePresence>
        <motion.nav 
          layout 
          transition={{
            layoutX: { duration: 0.3 },
            layoutY: { delay: 0.2, duration: 0.3 },
          }}
            className={cn(styles.nav, showNav && styles.showNav)}
          >
          <ul>
            <li>
              <Link to='/about/' activeStyle={{ color: "#222222" }}>About</Link>
            </li>
            {/* <li>
              <Link to='/projects/' activeStyle={{ color: "#222222" }}>Projects</Link>
            </li> */}
            <li>
              <Link to='/blog/' activeStyle={{ color: "#222222" }}>Blog</Link>
            </li>
            {/* <li>
              <Link to='/contact/' activeStyle={{ color: "#222222" }}>Contact</Link>
            </li> */}
          </ul>
        </motion.nav>
      </AnimatePresence>
    </div>
  </div>
)

export default Header
