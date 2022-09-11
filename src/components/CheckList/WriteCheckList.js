import React, { useState } from "react";
import styled from "@emotion/styled";

import CheckListItemList from "./CheckListItemList";

import { useRecoilState } from "recoil";
import { checkListState } from "atoms/checkListState";

function WriteCheckList() {
    const [toolItem, setToolItem] = useState("");
    const [toolItems, setToolItems] = useState([]);
    const [toolItemClicked, setToolItemClicked] = useState(false);
    const [allClicked, setAllClicked] = useState("checked");

    const [checkList, setCheckList] = useRecoilState(checkListState);

    const toolItemChange = (e) => {
        setToolItem(e.target.value);
    };

    const toolItemSubmit = (e) => {
        e.preventDefault();
        setToolItems((cur) => [...cur, toolItem]);
        setToolItem("");
    };

    const [foodItem, setFoodItem] = useState("");
    const [foodItems, setFoodItems] = useState([]);

    const foodItemChange = (e) => {
        setFoodItem(e.target.value);
    };

    const foodItemSubmit = (e) => {
        e.preventDefault();
        setFoodItems((cur) => [
            ...cur,
            { item: foodItem, checked: "unchecked" },
        ]);
        setFoodItem("");
    };

    // { id: 3, item: "의자", checked: "checked" },

    return (
        <Container>
            <CheckListForm className="toolItemInput" onSubmit={toolItemSubmit}>
                <ItemInput
                    type="text"
                    placeholder="챙길 아이템"
                    value={toolItem}
                    onChange={toolItemChange}
                />
                <AddButton>추가</AddButton>
            </CheckListForm>
            <CheckListForm className="toolItemInput" onSubmit={foodItemSubmit}>
                <ItemInput
                    type="text"
                    placeholder="장봐야 할 것"
                    value={foodItem}
                    onChange={foodItemChange}
                />
                <AddButton>추가</AddButton>
            </CheckListForm>
            <CheckListTitle>챙길 장비</CheckListTitle>
            <CheckListItemList props={checkList} />
            <CheckListTitle>장 봐야할 것</CheckListTitle>
            <CheckListItemList props={checkList} />
        </Container>
    );
}

export default WriteCheckList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const CheckListForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ItemInput = styled.input`
    all: unset;
    width: 80%;
    background-color: white;
    height: 3em;

    ::placeholder {
        margin-left: 20px;
    }
`;

const AddButton = styled.button`
    all: unset;
    background-color: blue;
    color: white;
    padding: 10px;
`;

const CheckListTitle = styled.div`
    background-color: lightblue;
    width: 80%;
    padding: 10px;
`;
