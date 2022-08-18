import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../atoms/loginState";
import LoginBox from "./LoginBox";

function MyPage() {
  const [isLogged, setIsLogged] = useRecoilState(loginState);

  return (
    <MyPageContainer>
      <h2>마이페이지</h2>
      {!isLogged ? (
        <LoginBox></LoginBox>
      ) : (
        <>
          <MyInfo>
            <MyImage
              alt="프로필 사진"
              src="https://dimg.donga.com/wps/SPORTS/IMAGE/2022/03/25/112525159.1.jpg"
            ></MyImage>
            <MyNickname>리원리</MyNickname>
          </MyInfo>

          <MenuTitle> 📝 내가 쓴 글</MenuTitle>
          <hr />
          <Link to="/diary">
            <MenuItem>내가 쓴 캠핑 일기</MenuItem>
          </Link>
          <hr />
          <Link to="/food">
            <MenuItem> 내가 쓴 캠핑 요리</MenuItem>
          </Link>
          <hr />
          <MenuTitle> 🤍 내가 좋아한 콘텐츠</MenuTitle>
          <hr />
          <MenuItem> 내가 좋아한 캠핑장</MenuItem>
          <hr />
          <MenuItem> 내가 좋아한 다른 사람 일기</MenuItem>
          <hr />
          <MenuItem> 내가 좋아한 다른 사람 요리</MenuItem>
          <Footer>
            <span
              onClick={() => {
                setIsLogged(false);
              }}
            >
              로그아웃
            </span>
          </Footer>
        </>
      )}
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
const MyInfo = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const MyImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
  margin-bottom: 5px;
`;

const MyNickname = styled.div`
  font-size: 20px;
`;

const MenuTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-left: 14px;
`;

const MenuItem = styled.div`
  font-size: 16px;
  margin-left: 30px;
`;

const Footer = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: end;
  margin-bottom: 100px;

  color: gray;
  font-size: 14px;
`;
