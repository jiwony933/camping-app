import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Menu = () => {
  const items = [
    { id: 1, title: "캠핑 일정 등록", link: "/schedule" },
    { id: 2, title: "캠핑 기록하기", link: "/diary" },
    { id: 3, title: "캠핑 요리 기록하기", link: "/food" },
    { id: 4, title: "캠핑 준비물 체크하기", link: "/checklist" },
  ];

  return (
    <Container>
      {items.map((item) => (
        <Link to={item.link} key={item.id}>
          <MainBoardItems>{item.title}</MainBoardItems>
        </Link>
      ))}
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
`;

const MainBoardItems = styled.div`
  background-color: white;
  margin: 10px;
  height: 200px;
  height: 200px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
