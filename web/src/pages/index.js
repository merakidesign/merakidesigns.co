import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Hero from '../components/hero'
import Services from '../components/services'
import Cta from '../components/cta'
import PageLink from '../components/page-link'
import ProjectSlider from '../components/project-slider'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

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

    projects: allSanityProject(limit: 3, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
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

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : []
  const pagelink = data.pagelink

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <Container>
          <h1 hidden>Welcome to {site.title}</h1>
          <Hero></Hero>
          {postNodes && (
            <BlogPostPreviewGrid homeSlider nodes={postNodes} />
          )}
          {/* {postNodes && (
            <ProjectSlider
              nodes={postNodes}
            ></ProjectSlider>
          )} */}
          <Services></Services>
          <Cta></Cta>
          <PageLink {...pagelink}></PageLink>
          {/* {projectNodes && (
            <ProjectPreviewGrid
              title='Latest projects'
              nodes={projectNodes}
              browseMoreHref='/projects/'
            />
          )} */}
        </Container>
    </Layout>
  )
}

export default IndexPage
