import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useState } from "react";
import DiaryDetail from "./Detail";
import { Link } from "react-router-dom";
import axios from "axios";
import DiaryItem from "./Item";

function DiaryList() {
    const [selected, setSelected] = useState();
    const [diaries, setDiaries] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get(
                "http://localhost:8000/api/diaries"
            );
            setDiaries(data);
        };
        fetch();
    }, []);

    const handleDiaryClick = (id) => {
        setSelected(diaries.find((el) => el.id === id));
    };

    return (
        <DiaryContainer>
            <Title>나의 캠핑 기록</Title>
            <DiaryItemBoard>
                <Link to="/diary/upload">
                    <UploadButton> ✏️ 일기 쓰기</UploadButton>
                </Link>
                {diaries.map((e, i) => (
                    <DiaryItem
                        key={i}
                        item={e}
                        onClick={() => handleDiaryClick(e.id)}
                    />
                ))}
            </DiaryItemBoard>

            {selected && (
                <DiaryDetail selected={selected} setSelected={setSelected} />
            )}
        </DiaryContainer>
    );
}

export default DiaryList;

const DiaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 90px;
`;

const Title = styled.h2``;

const DiaryItemBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UploadButton = styled.button`
    height: 80px;
    width: 90vw;
    background-color: #e2f1fc;
    border-radius: 20px;
    margin-bottom: 10px;
    border: none;
    text-align: center;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
