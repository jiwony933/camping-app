import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { foodListState } from "../../atoms/foodListState";
import FoodDetail from "./FoodDetail";

const FoodList = () => {
  const [selected, setSelected] = useState();

  const [foods] = useRecoilState(foodListState);

  const handleFoodItemClick = (id) => {
    setSelected(foods.find((el) => el.id === id));
  };

  useEffect(() => {
    //   TODO: get my food list // login하라는 화면을 보여줌
    // check logged state
  }, []);

  return (
    <FoodListContainer>
      <Title>내가 먹은 요리</Title>
      <FoodListView>
        {foods.map((food) => (
          <FoodItem onClick={() => handleFoodItemClick(food.id)}>
            <img src={food.image} alt={food.comment} />
            <span>{food.comment}</span>
            <span>{food.uploadDate}</span>
          </FoodItem>
        ))}
      </FoodListView>
      <Link to="/food/upload">
        <UploadButton>요리 기록하기</UploadButton>
      </Link>
      {selected && <FoodDetail selected={selected} setSelected={setSelected} />}
    </FoodListContainer>
  );
};

export default FoodList;

const FoodListContainer = styled.div`
  padding-bottom: 80px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Title = styled.h2``;

const FoodListView = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px 16px;
  flex: 1;
  overflow-y: scroll;
`;

const FoodItem = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 200px;
    background: lightgrey;
    border-radius: 16px;
  }
`;

const UploadButton = styled.button`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 56px;
  border: none;
  border-radius: 8px;
  background: black;
  color: white;
  font-size: 16px;
  margin: 20px 0;
`;
