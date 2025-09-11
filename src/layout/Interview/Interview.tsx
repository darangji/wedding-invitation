import styled from '@emotion/styled';
import QnA from './QnA';
import ContentWrapper from '@/components/ContentWrapper';

const Interview = () => {
  return (
    <ContentWrapper>
     <QnA />
    </ContentWrapper>
  );
};

export default Interview;

const InterviewWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
