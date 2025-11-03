// import image00 from '@/assets/images/00.jpg'
import image01 from '@/assets/images/01.jpg'
import image02 from '@/assets/images/02.jpg'
import image03 from '@/assets/images/03.jpg'
import image04 from '@/assets/images/04.jpg'
import image05 from '@/assets/images/05.jpg'
import image06 from '@/assets/images/06.jpg'
import image07 from '@/assets/images/07.jpg'
import image08 from '@/assets/images/08.jpg'
import image09 from '@/assets/images/09.jpg'
import image10 from '@/assets/images/10.jpg'
import image11 from '@/assets/images/11.jpg'
import image12 from '@/assets/images/12.jpg'
import image13 from '@/assets/images/13.jpg'
import image14 from '@/assets/images/14.jpg'
import image15 from '@/assets/images/15.jpg'
import image16 from '@/assets/images/16.jpg'
import image17 from '@/assets/images/17.jpg'
import image18 from '@/assets/images/18.jpg'
import image19 from '@/assets/images/19.jpg'
import image20 from '@/assets/images/20.jpg'
import image21 from '@/assets/images/21.jpg'
import image22 from '@/assets/images/22.jpg'
import image23 from '@/assets/images/23.jpg'
import image24 from '@/assets/images/24.jpg'

import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];


const imageSrc = [
  image01, image02, image03, image04, image05,
  image06, image07, image08, image09, image10,
  image11, image12, image13, image14, image15,
  image16, image17, image18, image19, image20,
  image21, image22, image23, image24
]

const images = imageSrc.map(src => {
  const width = 600;
  const height = 900;

  return {
    src: src,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => ({
      src: src,
      width: breakpoint,
      height: Math.round((height / width) * breakpoint),
    }))
  } as Photo;
})

export default images;
