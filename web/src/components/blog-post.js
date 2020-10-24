import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'
import BlogPostPreviewGrid from './blog-post-preview-grid'
import BlogPostPreview from './blog-post-preview'

import styles from './blog-post.module.css'

function BlogPost (props) {
  const { _rawExcerpt, _rawBody, authors, categories, title, mainImage, publishedAt, relatedPosts } = props
  return (
    <article className={styles.root}>
      <div className={styles.wrapper}>
        {mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .url()}
              alt={mainImage.alt}
            />
          </div>
        )}
        <div className={styles.heading}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        {_rawExcerpt && (
          <div className={styles.excerpt}>
            <BlockContent blocks={_rawExcerpt} />
          </div>
        )}
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            {_rawBody && <BlockContent className={styles.content} blocks={_rawBody} />}
            {authors && <RoleList items={authors} />}
          </div>
          <aside className={styles.metaContent}>
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Article tags</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {publishedAt && (
              <div className={styles.publishedAt}>
                <h3>Published at</h3>
                <span>
                  {differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? distanceInWords(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), 'YYYY/MM/DD')}
                  </span>
              </div>
            )}
          </aside>
          <h5 className={styles.relatedPosts}>Now enjoy these too…</h5>
        </div>
      </div>
      {relatedPosts && (
        <BlogPostPreviewGrid centerGrid nodes={relatedPosts} />
      )}
    </article>
  )
}

export default BlogPost
