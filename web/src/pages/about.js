import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import PeopleGrid from '../components/people-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import { buildImageObj } from '../lib/helpers'
import PageLink from '../components/page-link'

import { responsiveTitle1 } from '../components/typography.module.css'
import styles from '../styles/pages/about.module.css'

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      mainImage {
        asset {
          _id
        }
        alt
      }
      _rawBody
    }
    pagelink: sanityPageLink(name: {eq: "About"}) {
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
    people: allSanityPerson {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
          }
          name
          _rawBio
        }
      }
    }
  }
`

const AboutPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page
  const pagelink = data && data.pagelink
  const mainImage = page.mainImage
  const personNodes =
    data && data.people && mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs)

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <div className={styles.root}>
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
            <div className={styles.mainContent}>
              <BlockContent blocks={page._rawBody || []} />
            </div>
            {personNodes && personNodes.length > 0 && <PeopleGrid items={personNodes} title='People' />}
          </div>
        </div>
        <PageLink {...pagelink}></PageLink>
      </Container>
    </Layout>
  )
}

export default AboutPage
