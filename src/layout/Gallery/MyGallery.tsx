import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { Grid, Autoplay } from "swiper/modules";

import { MdClose, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import images from '@/layout/Gallery/Images';

const GridSwiper: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const rows = 2;

  // 버튼 스타일 공통
  const buttonStyle: React.CSSProperties = {
    position: "absolute",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "20px",
    userSelect: "none",
    transition: "background 0.3s",
    zIndex: 1000,
  };

  return (
    <div style={{ width: "100%", margin: "10 auto" }}>
      <Swiper
        modules={[Grid, Autoplay]}
        grid={{ rows, fill: "column" }}
        pagination={{ clickable: true }}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500, // 2.5초 간격 자동 슬라이드
          disableOnInteraction: false, // 사용자 조작 후에도 autoplay 유지
        }}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 2.2, // 모바일: 2개 보이고 3번째 살짝
          },
          768: {
            slidesPerView: 3.5, // 태블릿 이상: 3개 보이고 살짝
          },
          1024: {
            slidesPerView: 2.5, // PC에서는 4개
          },
        }}
        style={{
          width: "100%",
          height: "360px",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
            >
              <img
                onClick={() => {
                  setLightboxIndex(index);
                setLightboxOpen(true);
                }}
                src={image.src}
                alt={`slide-${index}`}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)";
                }}
              />
            </div>
          </SwiperSlide>
        ))}
        <Lightbox
          open={lightboxOpen}
        close={() => setLightboxOpen(false)}
          slides={images}
          index={lightboxIndex}
          styles={{
            root: {
              "--yarl__color_backdrop": "rgba(0, 0, 0, 0.55)"
            },
            container: {
              backdropFilter: "blur(6px)"
            },                        
          }}
          render={{
          // Prev 버튼
          buttonPrev: () => (
            <div
              onClick={() => setLightboxIndex((prev) => Math.max(prev - 1, 0))}
              style={{ ...buttonStyle, left: "10px", top: "50%", transform: "translateY(-50%)" }}
            >
              <MdArrowBackIos size={20} />
            </div>
          ),
          // Next 버튼
          buttonNext: () => (
            <div
              onClick={() => setLightboxIndex((prev) => Math.min(prev + 1, images.length - 1))}
              style={{ ...buttonStyle, right: "10px", top: "50%", transform: "translateY(-50%)" }}
            >
              <MdArrowForwardIos size={20} />
            </div>
          ),
          // Close 버튼
          buttonClose: () => (
            <div
              onClick={() => setLightboxOpen(false)}
              style={{ ...buttonStyle, top: "10px", right: "10px", width: "35px", height: "35px" }}
            >
              <MdClose size={20} />
            </div>
          ),
          }}
        />
      </Swiper>

    </div>
  );
};

export default GridSwiper;
