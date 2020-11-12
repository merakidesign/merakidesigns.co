import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <div className={styles.content}>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.hello}>
            <h4>Say hello.</h4>
            <p>hello@merakidesigns.co</p>
          </div>
          <div className={styles.socialMedia}>
            <div className={styles.social}>
              <h4>We’re pretty social</h4>
            </div>
            <a href={companyInfo.facebook}>Facebook</a>
            <a href={companyInfo.behance}>Behance</a>
            <a href={companyInfo.instagram}>Instagram</a>
            <a href={companyInfo.medium}>Medium</a>
            <a href={companyInfo.github}>Github</a>
            <a href={companyInfo.dribbble}>Dribbble</a>
          </div>
          <div className={styles.copyright}>
            <p>All Rights Reserved @ MerakiDesigns</p>
          </div>
        </div>
      </footer>
    </div>
  </>
)

export default Layout
