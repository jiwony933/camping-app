import React from "react";
import styled from "@emotion/styled";

const SelectedSchedule = ({ date, selected }) => {
    return (
        <Container>
            <SelectedDate>
                {date.startDate} ~ {date.endDate}
            </SelectedDate>
            <SelectedSpot>{selected.facltNm}</SelectedSpot>
        </Container>
    );
};

export default SelectedSchedule;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    border-radius: 10px;
    padding: 10px;
`;

const SelectedDate = styled.div`
    font-size: 18px;
`;

const SelectedSpot = styled.div`
    font-size: 22px;
`;
