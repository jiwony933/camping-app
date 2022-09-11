import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";

import SearchSpotBoard from "./SearchSpotBoard";
import ScheduleCalendar from "./ScheduleCalendar";
import SelectedSchedule from "./SelectedSchedule";
import { scheduleListState } from "atoms/scheduleListState";
import { useNavigate } from "react-router-dom";

function WriteSchedule() {
    const navigate = useNavigate();
    const [date, setDate] = useState({ startDate: "", endDate: "" });

    const calendarChange = (e) => {
        const { name, value } = e.target;
        setDate({ ...date, [name]: value });
    };

    const [spots, setSpots] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.visitkorea.or.kr/openapi/service/rest/GoCamping/searchList?ServiceKey=eoa%2FGqND7kc4kFyYrprGMRO2HR7PqGaqIpR197C4GKlnXAHAU0SbPSWitA%2BbOwTpcKFeXNXbmFkMxsj%2BpdosNA%3D%3D&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json&keyword=${encodeURIComponent(
                    searchTerm
                )}`
            );

            const json = await response.json();

            if (json.response.body.items.item) {
                setSpots(json.response.body.items.item);
            } else {
                setSpots([]);
            }
        };
        fetchData();
    }, [searchTerm]);

    const searchTermChanged = (e) => {
        setSearchTerm(e.target.value);
    };

    const [selected, setSelected] = useState("");
    const handleSpotClick = (id) => {
        setSelected(spots.find((el) => el.contentId === id));
    };

    const [schedule, setSchedule] = useRecoilState(scheduleListState);

    const scheduleSubmit = (e) => {
        e.preventDefault();
        setSchedule(
            schedule.concat({
                id: schedule.length + 1,
                startDate: date.startDate,
                endDate: date.endDate,
                spot: selected.facltNm,
            })
        );
        navigate("/schedule");
    };

    console.log(schedule);

    return (
        <Container onSubmit={scheduleSubmit}>
            <p>앞으로 다가오는 캠핑 일정을 등록하세요</p>
            <SelectedSchedule date={date} selected={selected} />
            <h3>일정 검색</h3>
            <ScheduleCalendar
                calendarChange={calendarChange}
                date={date}
                setDate={setDate}
            />
            <h3>캠핑장 검색</h3>
            <SearchSpotBoard
                spots={spots}
                setSpots={setSpots}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchTermChanged={searchTermChanged}
                selected={selected}
                setSelected={setSelected}
                handleSpotClick={handleSpotClick}
            />
            <SaveButton>저장하기</SaveButton>
        </Container>
    );
}

export default WriteSchedule;

const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0 20px 10px;
    gap: 8px;
`;

const SaveButton = styled.button``;
