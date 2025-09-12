import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';
import ContentWrapper from '@/components/ContentWrapper.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <ContentWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <Map />
      <MapButtons />
      <Address />
    </ContentWrapper>
  );
};

export default Location;
