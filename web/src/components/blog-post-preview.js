import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

import styles from './blog-post-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function BlogPostPreview (props) {
  return (
    <Link className={styles.root} to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(1000)
              .height(Math.floor((5 / 4) * 1000))
              // .height(1200)
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className={styles.articleDetails}>
        {props.categories && (
          <ul className={styles.categories}>
            {props.categories.map(category => (
              <li key={category._id}>{category.title}</li>
            ))}
          </ul>
        )}
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <BlockText blocks={props._rawExcerpt} />
          </div>
        )}
      </div>
    </Link>
  )
}

export default BlogPostPreview
