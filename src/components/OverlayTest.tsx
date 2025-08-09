import React from 'react';
import styled from '@emotion/styled';
import ImageWithGradient from '@/layout/Gallery/ImageWithGradient';

interface OverlayTextProps {
    backgroundImage: string;
    title: string;
}

const OverlayText: React.FC<OverlayTextProps> = ({ backgroundImage, title}) => {
    var topFont = 'MaruBuriLight'// 'iceJaram-Rg'
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '450px',
                position: 'relative',
            }}
        >
            <ImageWithGradient src={backgroundImage} alt='main'/>
            <TopText style={{ top: '12%', fontFamily: topFont }}>{title}</TopText>
        </div>
    );
};

export default OverlayText;

const TopText = styled.div`
    width: 90%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    line-height: 1em;
    // letter-spacing: 1px;
    font-size: 1.1rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2); // 글자 가독성 높이기
`;