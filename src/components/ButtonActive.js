import styled from "@emotion/styled";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import MenuItem from "./MenuItem";

const menus = [
  { title: "캠핑 일정 검색" },
  { title: "날짜 입력 창" },
  { title: "캠핑장 검색" },
  { title: "캠핑장 검색 창" },
];

function WriteSchedule() {
  const [isActive, setIsActive] = useState(false);

  console.log(isActive);

  return (
    <Container isActive={isActive}>
      {/* <Calendar
        calendarType="Hebrew"
        onChange={(value) => console.log(value)}
      /> */}
      <p>앞으로 다가오는 캠핑 일정을 등록하세요</p>
      <Button onClick={() => setIsActive(!isActive)}>버튼</Button>
      <Menu>
        {menus.map((menu) => (
          <MenuItem title={menu.title} isActive={isActive} />
        ))}
      </Menu>
    </Container>
  );
}

export default WriteSchedule;

const Button = styled.button`
  background-color: red;
  width: 200px;
  height: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.isActive ? "white" : "lightgrey")};
`;

const Menu = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 8px;
`;
