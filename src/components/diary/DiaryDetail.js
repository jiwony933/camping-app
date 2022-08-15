import styled from "@emotion/styled";

const DiaryDetail = ({ selected, setSelected }) => {
  return (
    <>
      <Overlay />
      <CloseButton onClick={() => setSelected()}>X</CloseButton>
      <DiaryBox>
        <h3>{selected.title}</h3>
        <img src={selected.image} />
        <DateWeather>
          {selected.campingDate} {selected.weather}
        </DateWeather>
        <Comment> {selected.comment} </Comment>
      </DiaryBox>
    </>
  );
};

export default DiaryDetail;

const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

const CloseButton = styled.button`
  z-index: 1005;
  position: fixed;
  top: 8%;
  right: 12%;
  background-color: gray;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const DiaryBox = styled.div`
  z-index: 1001;
  position: fixed;
  width: 80%;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;

  img {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const DateWeather = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Comment = styled.div`
  margin: 20px;
  line-height: 160%;
  font-size: 16px;
  font-weight: 400;
`;
