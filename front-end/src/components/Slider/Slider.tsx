'use client'

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";

export default function Slider() {
  const images = [{
    url: '/img/slider/jujutsu.jpeg',
    caption:'Slide 1',
  }, {
    url: '/img/slider/onepiece.jpeg',
    caption:'Slide 2',
  }, {
    url: '/img/slider/dragon.png',
    caption:'Slide 3',
  }, {
    url: '/img/slider/naruto.jpg',
    caption:'Slide 4',
  }, {
    url: '/img/slider/yourname.jpg',
    caption:'Slide 5',
  }]

  const properties = {
    autoplay: true,
    prevArrow: (
      <div style={{display: 'none'}}>
      </div>
    ),

    nextArrow: (
      <div style={{display: 'none'}}>
      </div>
    ),

    transitionDuration: 1000,
    duration: 5000
  }

  return (
    <div className='mt-24 w-full h-fit'>
      <Fade {...properties}>
        {images.map((image, index) => (
          <div key={index} className='h-[500px] flex justify-center items-center'>
            <Image 
              src={image.url}
              width={1920}
              height={400}
              alt= {image.caption}
            />
          </div>
        ))}
      </Fade>
    </div>
  )
}