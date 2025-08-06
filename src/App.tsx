import { useEffect, useRef, useState } from 'react';
// import { NavermapsProvider } from 'react-naver-maps';
import './layout/Calender/Calender.css'

import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Guestbook from '@/layout/Guestbook/Guestbook.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import ScrollSection from './components/ScrollSection';
import Interview from './layout/Interview/Interview';
import Calender from './layout/Calender/Calender.tsx'

import YouTube, { YouTubeProps } from "react-youtube";


function App() {
  // const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const videoId = 'l4OOLrwWNMs';
  const opts: YouTubeProps['opts'] = {
    width: '0',
    height: '0',
    playerVars: {
      autoplay: 1,
      loop: 1,
    },
  };


  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    // <NavermapsProvider ncpClientId={ncpClientId}>
    <Container>
      <ScrollSection>
        <Wrapper>
          {/* <YouTube
            videoId={videoId}
            opts={opts}
          /> */}
          <Main />
        </Wrapper>
      </ScrollSection>
      <ScrollSection>
        <Wrapper>
          {/* <Heading1>모시는 글</Heading1> */}
          <Invitation />
        </Wrapper>
      </ScrollSection>
      <ScrollSection>
        <Wrapper ref={galleryRef}>
          <Heading1>Gallery</Heading1>
          <GalleryWrap />
        </Wrapper>
      </ScrollSection>
      <ScrollSection>
        <Wrapper>
          <Heading1>Q&A</Heading1>
          <Interview />
        </Wrapper>
        <Wrapper>
          <Calender />
        </Wrapper>
        <Wrapper>
          <Heading1>마음 전하실 곳</Heading1>
          <Account />
        </Wrapper>
      </ScrollSection>
      <ScrollSection>
        <Wrapper>
          <Heading1>오시는 길</Heading1>
          <Location />
        </Wrapper>
      </ScrollSection>
      <Wrapper>
        <Heading1>신랑 신부에게</Heading1>
        <Guestbook />
      </Wrapper>
      {/* <FloatingBar isVisible={isVisible} /> */}
    </Container>
    // </NavermapsProvider>
  );
}

export default App;
