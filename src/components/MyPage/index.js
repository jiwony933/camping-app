import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../../atoms/loginState";
import LoginBox from "./LoginBox";
import MyPageDetail from "./MyPageDetail";

function MyPage() {
  const [isLogged, setIsLogged] = useRecoilState(loginState);

  return (
    <MyPageContainer>
      <h2>마이페이지</h2>
      {!isLogged ? <LoginBox /> : <MyPageDetail />}
    </MyPageContainer>
  );
}

export default MyPage;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  hr {
    border: 0.5px solid gray;
    width: 100%;
  }
  a {
    text-decoration: none;
  }
`;
