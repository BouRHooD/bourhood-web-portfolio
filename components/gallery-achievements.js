import React, { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react'
import Carousel from 'better-react-carousel'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import ArrowButton from "./layouts/ArrowButton"

const imagesAchievements = ImportAllImagesAchivements();
function ImportAllImagesAchivements() {
  const _require = require.context('../public/images/gallery_achievements/', false, /\.(jpg)$/, )
  const _imagesAchievements = _require.keys().map(_require)
  return _imagesAchievements.map((imgSrc) => (
    {
      largeURL: imgSrc.default.src,
      thumbnailURL: imgSrc.default.src,
      width: imgSrc.default.width,
      height: imgSrc.default.height,
    }
  ))
}

function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryType,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  const [over, setOver] = useState(true);

  return (
    <Container onMouseOver={()=>setOver(false)} onMouseLeave={()=>setOver(true)}>
      <div className="pswp-gallery" id={props.galleryType}>
        <Carousel cols={5} rows={1} gap={5} loop={true} arrowLeft={<ArrowButton hidden={over} type="prev"/>} arrowRight={<ArrowButton hidden={over} type="next"/>}>
          {props.images.map((image, index) => (
            <Carousel.Item key={'Carousel.Item_' + props.galleryID + '-' + index}>
              <a
                href={image.largeURL}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                key={'a_' + props.galleryID + '-' + index}
                rel="noreferrer"
              >
                <img src={image.thumbnailURL} alt="" />
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

const GalleryAchievements = () => (
  <SimpleGallery galleryId="gallery-achievements" galleryType="gallery--responsive-images" images={imagesAchievements}/>  
)

export default GalleryAchievements
export { getServerSideProps } from './chakra'
