import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import PageLink from '../components/page-link'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query BlogPageQuery {
    pagelink: sanityPageLink(link: {regex: "/about/"}) {
      id
      title
      description
      link
      linkText
      mainImage {
        asset {
          _id
        }
      }
    }

    posts: allSanityPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          categories {
            _id
            title
          }
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  const pagelink = data.pagelink

  return (
    <Layout>
      <SEO title='Blog' />
      <Container>
        {/* <h1 className={responsiveTitle1}>Blog</h1> */}
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </Container>
    </Layout>
  )
}

export default BlogPage
