import React from "react";
import { Link } from "react-router-dom";
import MainBoardItems from "./MainBoardItems";
import styled from "@emotion/styled";

const items = [
  { title: "캠핑 일정 등록", link: "/schedule" },
  { title: "캠핑 기록하기", link: "/diary" },
  { title: "캠핑 요리 기록하기", link: "/food" },
  { title: "캠핑 준비물 체크하기", link: "/checklist" },
];

function MainBoard() {
  return (
    <div>
      <Menu>
        {items.map((item) => (
          <Link to={item.link} key={item.id}>
            <MainBoardItems title={item.title} />
          </Link>
        ))}
      </Menu>
    </div>
  );
}
export default MainBoard;

const Menu = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
