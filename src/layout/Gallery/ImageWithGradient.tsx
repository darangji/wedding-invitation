import styled from '@emotion/styled';

// 1. 이미지를 감싸는 컨테이너
const ImageContainer = styled.div`
  position: relative;
  // width: 300px; /* 예시 너비 */
  // height: 450px; /* 예시 높이 */
  width: 100%;
  max-width: 450px;
  // padding-top: 20px;
  display: inline-block; /* 혹은 다른 디스플레이 속성 */
`;

// 2. 이미지 위에 올라갈 그라데이션 오버레이
const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 아래에서 위로 흰색 그라데이션 */
  background: linear-gradient(
     to top,
    rgba(255, 255, 255, 1) 0%,   /* 시작(아래)은 흰색 */
    rgba(255, 255, 255, 0.8) 10%,   /* 시작(아래)은 흰색 */
    rgba(255, 255, 255, 0) 30%  /* 30% 지점에서 투명 */
  );
  /* 오버레이가 클릭 이벤트를 가로채지 않도록 설정 */
  pointer-events: none; 
`;

const MyImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

interface ImageWithGradientProps {
  src: string;
  alt: string;
}

// 사용 예시
const ImageWithGradient: React.FC<ImageWithGradientProps> = ({src, alt}) => (
  <ImageContainer>
    <MyImage src={src} alt={alt} />
    <GradientOverlay />
  </ImageContainer>
);

export default ImageWithGradient;