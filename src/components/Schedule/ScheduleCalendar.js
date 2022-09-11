import styled from "@emotion/styled";
import { useState } from "react";

const ScheduleCalendar = ({ date, setDate, calendarChange }) => {
    return (
        <Container>
            시작 날짜
            <input type="date" name="startDate" onChange={calendarChange} />
            종료 날짜
            <input type="date" name="endDate" onChange={calendarChange} />
        </Container>
    );
};

export default ScheduleCalendar;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
