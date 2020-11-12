import React from 'react'
import BlogPostPreview from './blog-post-preview'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'

import 'pure-react-carousel/dist/react-carousel.es.css'

import styles from './project-slider.module.css'

function ProjectSlider (props) {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <CarouselProvider
          className={styles.carousel}
          naturalSlideWidth={4}
          naturalSlideHeight={5}
          totalSlides={3}
          visibleSlides={3}
          infinite={1}
          isIntrinsicHeight
        >
          <Slider>
            {props.nodes &&
              props.nodes.map(node => (
                  <Slide index={node.id}>
                    <BlogPostPreview {...node} />
                  </Slide>
              ))}
          </Slider>
          
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  )
}

export default ProjectSlider