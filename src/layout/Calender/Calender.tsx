import styled from 'styled-components';

interface CalendarDayProps{
  day: number;
  isWeddingDay: any;
  isHoliday: any;
}


function CalendarDay({ day, isWeddingDay, isHoliday }: CalendarDayProps) {
  const dayOfWeekClass = day % 7 === 4 ? 'red' : day % 7 === 3 ? 'blue' : '';
  const holidayClass = isHoliday ? 'red' : '';
  const specialDayClass = isWeddingDay ? 'heart red' : '';

  return (
    <Day className={`calendar__day ${dayOfWeekClass} ${specialDayClass} ${holidayClass}`}>
      {day}
    </Day>
  );
}

function Calendar() {
    const daysInMonth = 31; // 2024년 9월은 30일까지
    const firstDayOfWeek = 4; // 2024년 9월 1일은 일요일 (0부터 일요일, 1부터 월요일, ..., 6부터 토요일)
    const emptyDays = Array.from({ length: firstDayOfWeek }, () => null);
    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <CalenderWrapper>
      {/* <div className='calendar__line'></div> */}
      <CalendarBody>
        <CalendarHeader>2026년 1월</CalendarHeader>
        <Weekdays>
          {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
            <Day key={day}>{day}</Day>
          ))}
        </Weekdays>
        <Days>
          {emptyDays.map((_, index) => (
            <Day key={`empty-${index}`} />
          ))}
          {days.map((day) => (
            <CalendarDay key={day} day={day} isWeddingDay={day === 10} isHoliday={day === 1}/>
          ))}
        </Days>
      </CalendarBody>
    </CalenderWrapper>
  )
}

const CalenderWrapper = styled.div`
  width: 90%;
  max-width: 380px;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const CalendarHeader = styled.div`
  font-size: 1.2rem;
  padding: 10px 0;
`

const CalendarBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin: 0 auto;
  padding: 30px;
  // background-color: rgba(52, 134, 86, 0.07);
  border: 1px dashed #e6ece1;
  border-radius: 30px;
`

const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  gap: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
`

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  gap: 5px;
`

const Day = styled.div`
  padding: 3px 9px;
  text-align: center;
  position: relative; /* 상대 위치 설정 */
  width: 17px;
`

export default Calendar