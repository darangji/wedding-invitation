import styled from '@emotion/styled';
import PhotoGallery from './PhotoGallery.tsx';

const GalleryWrap = () => {
  return (
    <ContentsWrap>
      <ImageWrap>
      <PhotoGallery/>
      </ImageWrap>
    </ContentsWrap>
  );
};

export default GalleryWrap;

const ContentsWrap = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 30px 0;
  box-sizing: border-box;
  // overflow: hidden;
  // display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrap = styled.div`
  position: relative;
  overflow: hidden;
`

