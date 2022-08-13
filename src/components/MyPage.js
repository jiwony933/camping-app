import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

function MyPage() {
  return (
    <MyPageContainer>
      <h2>마이 페이지</h2>
      <MyInfo>
        <MyImage
          alt="프로필 사진"
          src="https://dimg.donga.com/wps/SPORTS/IMAGE/2022/03/25/112525159.1.jpg"
        ></MyImage>
        <MyNickname>리원리</MyNickname>
      </MyInfo>
      <MyContent>
        <b> 📝 내가 쓴 글</b>
        <hr />
        <Link to="/diary">
          <span>내가 쓴 캠핑 일기</span>
        </Link>
        <hr />
        <Link to="/food">
          <span> 내가 쓴 캠핑 요리</span>
        </Link>
      </MyContent>
      <hr />
      <LikedContent>
        <b> 🤍 내가 좋아한 콘텐츠</b>
        <hr />
        <span> 내가 좋아한 캠핑장</span>
        <hr />
        <span> 내가 좋아한 다른 사람 일기</span>
        <hr />
        <span> 내가 좋아한 다른 사람 요리</span>
      </LikedContent>
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
  a:visited {
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

const MyContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const LikedContent = styled.div`
  display: flex;
  flex-direction: column;
`;
