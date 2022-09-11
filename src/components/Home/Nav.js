import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const items = [
  { title: "home", link: "/" },
  { title: "search", link: "/place" },
  { title: "community", link: "/" },
  { title: "mypage", link: "/mypage" },
];

function Nav() {
  return (
    <Navibox>
      {items.map((item) => (
        <Link to={item.link} key={item.title}>
          <NavButton>{item.title}</NavButton>
        </Link>
      ))}
    </Navibox>
  );
}

export default Nav;

const Navibox = styled.div`
  background-color: white;
  position: fixed;
  height: 80px;
  width: 100%;
  display: flex;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
  }
`;
const NavButton = styled.div`
  width: 25%;
`;
