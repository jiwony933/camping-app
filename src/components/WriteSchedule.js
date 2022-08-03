import styled from "@emotion/styled";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

function WriteSchedule() {
  const [value, onChange] = useState(new Date());
  const [searchWord, setSearchWord] = useState("");
  const onKeywordChange = (event) => {
    setSearchWord(event.target.value);
    console.log(searchWord);
  };
  axios.get(
    `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=eoa%2FGqND7kc4kFyYrprGMRO2HR7PqGaqIpR197C4GKlnXAHAU0SbPSWitA%2BbOwTpcKFeXNXbmFkMxsj%2BpdosNA%3D%3D&numOfRows=$20&pageNo=20&MobileOS=ETC&MobileApp=TestApp&_type=json`
  );

  return (
    <Container>
      <p>앞으로 다가오는 캠핑 일정을 등록하세요</p>
      <Menu>
        <h3>일정 검색</h3>
        <Calendar onChange={onChange} value={value} />
        <h3>캠핑장 검색</h3>
        <input
          name="searchWord"
          placeholder="캠핑장 이름 검색"
          onChange={onKeywordChange}
        ></input>
        <searchResult>{searchWord}</searchResult>
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
`;

const Menu = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const searchResult = styled.div`
  background-color: lightblue;
`;
