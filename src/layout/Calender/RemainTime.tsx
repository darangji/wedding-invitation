import { useEffect, useState } from "react";
import styled from "styled-components";

function RemainTime() {
    // 남은 시간 상태를 저장하는 객체 초기화
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


    useEffect(() => {
        const updateTimer = () => {
            const currentDate = new Date();
            const targetDate = new Date('2026-01-10T17:00:00+0900');
            const timeDiff = +targetDate - +currentDate;

            if (timeDiff > 0) {
                // 남은 시간 계산
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                // 이벤트가 지났다면, 모든 값이 0이 되도록 설정
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        // 1초마다 updateTimer를 호출하여 남은 시간을 업데이트
        const timer = setInterval(updateTimer, 1000);

        // 컴포넌트가 언마운트되면 타이머를 정리
        return () => clearInterval(timer);
    }, []);

    return (
        <RemainTimeWrapper>
            <div>다솔 ♥ 영지 의 결혼식</div>
            <div>
                <RemainTimeText>{timeLeft.days}일 </RemainTimeText>
                <RemainTimeText>{timeLeft.hours}시간 </RemainTimeText>
                <RemainTimeText>{timeLeft.minutes}분 </RemainTimeText>
                <RemainTimeText>{timeLeft.seconds}초 </RemainTimeText> 전
            </div>
        </RemainTimeWrapper>
    )
}

const RemainTimeWrapper = styled.div`
  display: flex;
  width: 70%;
  min-width: 300px;
  max-width: 450px;
  flex-direction: column;
  padding: 20px 0px;
  background-color: rgba(230, 236, 225, 0.8);
  border-radius: 20px;
  margin-bottom: 50px;
`;

const RemainTimeText = styled.span`
    // color: rgb(218, 82, 82);
    color: rgba(49, 158, 125, 1);
    font-weight: bold;
`

export default RemainTime;