import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/main.jpg'
import OverlayText from '@/components/OverlayTest';
import Snowfall from '@/components/Snowfall';

const Main = () => {
  const { greeting } = data;
  return (
    <MainWrapper>
    <div style={{
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        verticalAlign: 'middle',
      }}>
        <OverlayText
          backgroundImage={mainImg}
          title="A Celebration of Our Love"
        />
        <Snowfall/>
         
      </div>
      <NameContainer>
        <Name>이다솔</Name>
        <p>그리고,</p>
        <Name>이영지</Name>
      </NameContainer>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  padding-bottom: 90px;
`

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:baseline;
`

const Name = styled.p`
  font-size: 1.3rem;
  letter-spacing: 8px;
  width: 28%;
`;

const SubTitle = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
