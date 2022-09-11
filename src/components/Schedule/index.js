import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { scheduleListState } from "atoms/scheduleListState";

const Schedule = () => {
    const [schedule, setSchedule] = useRecoilState(scheduleListState);
    const [filteredSchedule, setFilteredSchedule] = useState(schedule);
    useEffect(() => {
        setFilteredSchedule(
            schedule
                .slice()
                .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
        );
    }, [schedule]);

    return (
        <Container>
            <h2>다가오는 캠핑 일정</h2>
            <Link to="/schedule/upload">
                <UploadSchduleBtn>새 일정 등록</UploadSchduleBtn>
            </Link>
            <PlannedItemBoard>
                {filteredSchedule.map((item) => (
                    <PlannedItem key={item.id}>
                        <PlannedDate>
                            {item.startDate} ~ {item.endDate}
                        </PlannedDate>
                        <PlannedSpot>{item.spot}</PlannedSpot>
                    </PlannedItem>
                ))}
            </PlannedItemBoard>
        </Container>
    );
};

export default Schedule;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        all: unset;
        cursor: pointer;
        color: black;
    }
`;

const PlannedItemBoard = styled.div``;

const PlannedItem = styled.div`
    padding: 10px;
    background-color: white;
    width: 400px;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
`;

const PlannedDate = styled.span``;

const PlannedSpot = styled.span``;

const UploadSchduleBtn = styled.button`
    all: unset;
    padding: 10px;
    background-color: blue;
    color: white;
    width: 400px;
    text-align: center;
`;
