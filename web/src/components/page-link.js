import React from 'react'
import { imageUrlFor } from '../lib/image-url'
import { buildImageObj } from '../lib/helpers'
import ArrowLink from './arrow-link'

import styles from './page-link.module.css'

const PageLink = (props) => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div>
          <h5 className={styles.h5}>
            {props.title}
          </h5>
          <p>
            {props.description}
          </p>
          {props.link && (
            <ArrowLink link={props.link} linkText={props.linkText}></ArrowLink>
          )} 
        </div>
        <div>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(1000)
                .height(Math.floor((5 / 4) * 1000))
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default PageLink