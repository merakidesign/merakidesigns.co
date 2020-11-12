import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'
import { cn } from '../lib/helpers'
import { motion, useSpring } from 'framer-motion'

import styles from './blog-post-preview-grid.module.css'

function BlogPostPreviewGrid (props) {
  return (
    <section className={styles.root}>
      <div className={cn(styles.wrapper, props.homeSlider && styles.homeSlider)}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} transition={{
            opacity: { duration: 0.4 },
          }}>
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
                  <motion.li 
                    initial={{ boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)" }} 
                    whileHover={{ 
                      y: -10, 
                      boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.1)"
                    }} 
                    whileTap={{ y: 0 }} 
                    className={styles.gridItem} 
                    key={node.id}
                  >
                    <BlogPostPreview {...node} />
                  </motion.li>
                ))}
            </ul>
          </div>
          {props.browseMoreHref && (
            <div className={styles.browseMoreNav}>
              <Link to={props.browseMoreHref}>Browse more</Link>
            </div>
          )}
        </motion.div>
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
