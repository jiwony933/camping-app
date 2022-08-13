import styled from "@emotion/styled";

const FoodDetail = ({ selected, setSelected }) => {
  return (
    <>
      <Overlay onClick={() => setSelected()} />
      <Content>
        <img src={selected.image} alt={selected.comment} />
        <Comment>{selected.comment}</Comment>
        <Date>{selected.uploadDate}</Date>
      </Content>
    </>
  );
};

export default FoodDetail;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1002;
  transform: translate(-50%, -50%);
  background: white;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 8px;
    object-fit: cover;
    height: 240px;
    width: 240px;
  }
`;

const Comment = styled.div`
  padding: 8px;
  font-weight: 500;
  font-family: sans-serif;
`;

const Date = styled.span`
  font-size: 14px;
`;
