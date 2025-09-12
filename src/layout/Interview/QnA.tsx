import styled from '@emotion/styled';
import data from 'data.json';
import { Caption, PointTitle } from '@/components/Text.tsx';
import { IInterviewInfo } from '@/types/data.ts';

const QnA = () => {
  const { interviewInfo } = data;
  return (
    <QnAWrapper>
      {interviewInfo?.map((item: IInterviewInfo) => {
        const { question, answer } = item;
        return (
          <QA key={question}>
            <PointTitle>{question}</PointTitle>
            <Caption>{answer}</Caption>
          </QA> 
        );
      })}
    </QnAWrapper>
  );
};

export default QnA;

const QnAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const QA = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
