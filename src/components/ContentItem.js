import React from 'react'
import ContentThumb from './ContentThumb'
import ContentDescription from './ContentDescription'
import { context } from '@react-three/fiber'

export default function ContentItem( {thumbSrc, thumbAlt, description }) {
  return (
    <div className='content-top-level-div'>
        <div className='content-box-outline'>
            <ContentThumb thumbSrc={ thumbSrc } thumbAlt={thumbAlt} />
            <ContentDescription description={ description }/>
        </div>
    </div>
  )
}
