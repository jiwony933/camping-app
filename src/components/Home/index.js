import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { loginState } from "../../atoms/loginState";
import WelcomeMessage from "./WelcomMessage";
import Login from "./Login";
import Menu from "./Menu";
import { userState } from "atoms/userState";

function Home() {
  const isLogged = useRecoilValue(loginState);
  const user = useRecoilValue(userState);
  const [isLoginBoxVisible, setIsLoginBoxVisible] = useState(false);

  useEffect(() => {
    if (isLogged) setIsLoginBoxVisible(false);
  }, [isLogged]);

  return (
    <Container>
      {isLogged ? (
        <WelcomeMessage name={user.name} />
      ) : (
        <Login
          setIsLoginBoxVisible={setIsLoginBoxVisible}
          isLoginBoxVisible={isLoginBoxVisible}
        />
      )}
      {!isLoginBoxVisible && <Menu />}
    </Container>
  );
}
export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
