import styled from "@emotion/styled";
import React from "react";

const MenuItem = ({ title, isActive }) => {
  return <Container isActive={isActive}>{title}</Container>;
};

export default MenuItem;

const Container = styled.div`
  background: ${(props) => (props.isActive ? "lightgrey" : "white")};
  padding: 8px;
  border-radius: 4px;
`;
