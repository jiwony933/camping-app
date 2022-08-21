import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import React, { useState } from "react";
import LoginBox from "components/MyPage/LoginBox";

const Login = ({ isLoginBoxVisible, setIsLoginBoxVisible }) => {
  const handleLoginButtonClick = () => {
    setIsLoginBoxVisible(true);
  };

  return (
    <Container>
      {isLoginBoxVisible ? (
        <LoginBox />
      ) : (
        <LoginMessage>
          <span>로그인 해주세요</span>
          <button onClick={handleLoginButtonClick}>로그인</button>
        </LoginMessage>
      )}
    </Container>
  );
};

export default Login;

const Container = styled.div``;

const LoginMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  > span {
    font-size: 24px;
    font-weight: 500;
  }

  button {
    font-size: 20px;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background: black;
    color: white;
    font-weight: 500;
    cursor: pointer;
  }
`;
