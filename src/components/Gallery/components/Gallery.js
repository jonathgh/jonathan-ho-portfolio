import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'


const Gallery = (props) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(selectedIndex => {
    setLightboxIsOpen(!lightboxIsOpen)
    setSelectedIndex(selectedIndex)
  }, [lightboxIsOpen])

  return (
    <div>
      {props.images && (<div className="row">
        {props.images.map((obj, i) => {
        return (<GalleryItem
          id={obj.id}
          source={obj.source}
          thumbnail={obj.thumbnail}
          caption={obj.caption}
          description={obj.description}
          position={obj.position}
          toggleLightbox={obj.toggleLightbox}
          position={i}
          toggleLightbox={toggleLightbox}
        />); 
        })}
        </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} views={props.images} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
