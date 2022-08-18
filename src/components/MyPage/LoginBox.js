import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { loginState } from "atoms/loginState";

const LoginBox = () => {
  const [isLogged, setIsLogged] = useRecoilState(loginState);

  return (
    <Container>
      <LoginAlert>로그인을 해주세요</LoginAlert>
      아이디<LoginInput type="text"></LoginInput>
      비밀번호<LoginInput type="password"></LoginInput>
      <Button
        onClick={() => {
          setIsLogged(true);
        }}
      >
        로그인 하기
      </Button>
    </Container>
  );
};

export default LoginBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginAlert = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 40px;
`;

const LoginInput = styled.input`
  width: 300px;
  height: 40px;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Button = styled.div`
  border: none;
  width: 150px;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  background-color: black;
  color: white;
  margin: 20px;
  text-align: center;

  :active {
    background-color: white;
    color: black;
  }
`;
