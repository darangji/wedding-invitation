import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

import './style.css';

// import required modules
import { Grid, Navigation } from 'swiper/modules';

import images from '@/layout/Gallery/Images.ts';
import styled from "styled-components";

function SlickGallery() {
  const [index, setIndex] = useState(-1);
  return (
    <Wrapper>
      <Swiper
        // grabCursor={true}
        slidesPerView={2.2}
        grid={{
          rows: 2,
        }}
        navigation={true}
        loop={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
        }}
        modules={[Grid, Navigation]}
        className="mySwiper"
      >
        {
          images.map((img, idx) =>
            <SwiperSlide key={idx}>
              <img
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onClick={() => setIndex(idx)}
                src={img.src}
                style={{
                  width: "90%",
                  height: "auto",
                  objectFit: "cover",
                  margin: "0 auto",
                  borderRadius: "15px",
                }} />
            </SwiperSlide>
          )
        }
      </Swiper>
      {index !== -1 ?
        <PopupWrapper>
          <Popup>
            <PopupSection>
              <button onClick={() => setIndex((images.length + index - 1) % images.length)}>prev</button>
              <img
                src={images[index].src}
                style={{
                  width: "70%",
                  height: "auto",
                  objectFit: "cover",
                  margin: "0 auto",
                  borderRadius: "15px",
                }}
              />

              <button onClick={() => setIndex((index + 1) % images.length)}>next</button>
            </PopupSection>
            <button onClick={() => setIndex(-1)}>닫기</button>
          </Popup>
        </PopupWrapper> : <></>
      }

    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 20px;
`;

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Popup = styled.div`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
`
const PopupSection = styled.section`

`

export default SlickGallery;
