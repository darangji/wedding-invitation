import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import { Heading1, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Heading1> - Invitation - </Heading1>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  // background-color: rgba(201, 226, 196, 0.1);
  width: 90%;
  padding: 50px 0;
  display: flex; 
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
