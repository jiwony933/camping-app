import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { checkListState } from "atoms/checkListState";

const CheckListList = ({ props }) => {
  const [checkList, setCheckList] = useRecoilState(checkListState);

  return (
    <Container>
      {checkList.map((e, i) => (
        <Item>
          <CheckBox key={i} type="checkbox" checked={e.checked} />
          {e.item}
        </Item>
      ))}
    </Container>
  );
};
export default CheckListList;

const Container = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 200px;
  width: 80%;
  overflow-y: scroll;
`;

const CheckBox = styled.input``;

const Item = styled.li`
  all: unset;
  font-size: 20px;
  margin-bottom: 5px;
`;
