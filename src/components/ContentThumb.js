import React from 'react'

export default function ContentThumb( { thumbSrc, thumbAlt }) {
  return (
    <div className='thumb-top-level-div'>
        <div className='project-thumb'>
          <img className='thumbnail' src={ thumbSrc } alt={ thumbAlt } />
        </div>
    </div>
  )
}
