import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/00.jpg'
import OverlayText from '@/components/OverlayTest';
import Snowfall from '@/components/Snowfall';

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        verticalAlign: 'middle'
      }}>
        <OverlayText
          backgroundImage={mainImg}
          title="A Celebration of our love"
          subTitle1='아름다운 날,'
          subTitle2='소중한 분들을 초대합니다.'
        />
        <Snowfall/>
         
      </div>
      <NameContainer>
        <Name>이다솔</Name>
        <And>그리고,</And>
        <Name>이영지</Name>
      </NameContainer>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:baseline;
`

const Name = styled.p`
  font-size: 1.3rem;
  letter-spacing: 7px;
  width: 30%;
`

const And = styled.p`
  
`
const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
