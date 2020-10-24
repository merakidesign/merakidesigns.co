import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

import styles from './blog-post-preview-grid.module.css'

function BlogPostPreviewGrid (props) {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        {props.title && (
          <h2 className={styles.headline}>
            {props.browseMoreHref ? (
              <Link to={props.browseMoreHref}>{props.title}</Link>
            ) : (
              props.title
            )}
          </h2>
        )}
        <div className={`${props.centerGrid ? styles.centerGrid : ''}`}>
          <ul className={styles.grid}>
            {props.nodes &&
              props.nodes.map(node => (
                <li className={styles.gridItem} key={node.id}>
                  <BlogPostPreview {...node} />
                </li>
              ))}
          </ul>
        </div>
        {props.browseMoreHref && (
          <div className={styles.browseMoreNav}>
            <Link to={props.browseMoreHref}>Browse more</Link>
          </div>
        )}
      </div>
    </section>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
