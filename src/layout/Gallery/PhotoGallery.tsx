import { useState, useRef } from "react";
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

import { IoMdCloseCircle } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function PhotoGallery() {
  const [index, setIndex] = useState(-1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = 0; // Reset endX on new touch
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== 0 && touchEndX.current !== 0) {
      const touchDiff = touchStartX.current - touchEndX.current;
      const swipeThreshold = 50; // 스와이프로 인식할 최소 픽셀 거리

      if (touchDiff > swipeThreshold) {
        setIndex((prevIndex) => (prevIndex + 1) % images.length); // 다음 이미지
      } else if (touchDiff < -swipeThreshold) {
        setIndex((prevIndex) => (images.length + prevIndex - 1) % images.length); // 이전 이미지
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault(); // 브라우저의 기본 이미지 드래그 동작 방지
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isDragging.current) return;

    isDragging.current = false;
    const dragEndX = e.clientX;
    const dragDiff = dragStartX.current - dragEndX;
    const swipeThreshold = 50; // 스와이프로 인식할 최소 픽셀 거리

    if (dragDiff > swipeThreshold) {
      setIndex((prevIndex) => (prevIndex + 1) % images.length); // 다음 이미지
    } else if (dragDiff < -swipeThreshold) {
      setIndex((prevIndex) => (images.length + prevIndex - 1) % images.length); // 이전 이미지
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false; // 이미지 밖으로 나가면 드래그 취소
  };
  return (
    <Wrapper>
      <Swiper
        // grabCursor={true}
        slidesPerView={2.5}
        grid={{
          rows: 2,
        }}
        navigation={true}
        loop={true}
        spaceBetween={5}
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
                  aspectRatio: "1/1",
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
              <NavButton
                left
                onClick={() => setIndex((images.length + index - 1) % images.length)}
              ><IoIosArrowBack /></NavButton>
              <img
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                src={images[index].src}
                style={{
                  maxWidth: "450px",
                  width: "90%",
                  height: "100%",
                  objectFit: "cover",
                  margin: "0 auto",
                  borderRadius: "15px",
                }}
              />

              <NavButton
                right
                onClick={() => setIndex((index + 1) % images.length)}
              ><IoIosArrowForward /></NavButton>

              <CloseButton
                onClick={() => setIndex(-1)}
                style={{
                  position: 'absolute',
                  top: 0,
                  right: '5%',
                  cursor: 'pointer',
                  border: 0,
                  backgroundColor: 'transparent',
                  color: 'rgba(0, 0, 0, 0.2)',
                  margin: '5px'
                }}
              ><IoMdCloseCircle size={"25px"} /></CloseButton>
            </PopupSection>
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
const PopupSection = styled.div`
  width: auto;
  max-width: 450px;
  height: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 5%;
  cursor: pointer;
  border: 0;
  backgroundColor: 'transparent';
  color: 'rgba(0, 0, 0, 0.2)';
  margin: '5px';
`

const NavButton = styled.button<{ left?: boolean; right?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.left ? 'left: 10px;' : '')}
  ${(props) => (props.right ? 'right: 10px;' : '')}

  // width: 10%;
  // aspect-ratio: 1/1,
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0; /* 평소에는 투명하게 */
  transition: opacity 0.3s ease;

  ${PopupSection}:hover & {
    opacity: 1; /* PopupSection에 마우스를 올리면 버튼 나타남 */
  }
`;

export default PhotoGallery;
