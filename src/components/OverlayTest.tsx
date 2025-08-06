import React from 'react';
import styled from '@emotion/styled';

interface OverlayTextProps {
    backgroundImage: string;
    title: string;
    subTitle1: string;
    subTitle2: string;
}

const OverlayText: React.FC<OverlayTextProps> = ({ backgroundImage, title, subTitle1, subTitle2}) => {
    var topFont = 'iceJaram-Rg'
    var bottomFont = 'KCC-eunyoung' //'iceJaram-Rg'
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '450px',
                position: 'relative',
                // overflow: 'hidden'
            }}
        >
            <MainImg src={backgroundImage} />
            <TopText style={{ top: '15%', fontFamily: topFont }}>{title}</TopText>
            <BottomText style={{ top: '82%', fontFamily: bottomFont }}>{subTitle1}</BottomText>
            <BottomText style={{ top: '88%', fontFamily: bottomFont }}>{subTitle2}</BottomText>
            {/* <Snowfall/> */}
        </div>
    );
};

export default OverlayText;

const MainImg = styled.img`
//   border-radius: 200px 200px 0 0;
  width: 100%;
  max-width: 450px;
  padding-top: 20px;
`;

const TopText = styled.div`
    width: 90%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    line-height: 1em;
    letter-spacing: 2px;
    font-size: 1.1rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6); // 글자 가독성 높이기
`;

const BottomText = styled.div`
    width: 90%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    line-height: 130%;
    letter-spacing: 4px;
    font-size: 1.8rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6); // 글자 가독성 높이기
`;