import { useEffect, useRef, useState } from 'react';
import './layout/Calender/Calender.css'

import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import ScrollSection from './components/ScrollSection';
import Interview from './layout/Interview/Interview';
import Calender from './layout/Calender/Calender.tsx'
import FloatingBar from './layout/FloatingBar/FloatingBar.tsx';
import RemainTime from './layout/Calender/RemainTime.tsx';

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
          <Main />
        </Wrapper>
      </ScrollSection>
      <ScrollSection>
        <Wrapper>
          <Invitation />
        </Wrapper>
      </ScrollSection>
      <ScrollSection>
        <Wrapper>
          <Calender />
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
      <ScrollSection>
        <Wrapper>
          <RemainTime />
        </Wrapper>
      </ScrollSection>
      <FloatingBar isVisible={isVisible} />
    </Container>
    // </NavermapsProvider>
  );
}

export default App;
