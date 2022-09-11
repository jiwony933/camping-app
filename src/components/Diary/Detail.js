import styled from "@emotion/styled";
import Overlay from "layout/Overlay";

const DiaryDetail = ({ selected, setSelected }) => {
    return (
        <>
            <Overlay />
            <CloseButton onClick={() => setSelected()}>X</CloseButton>
            <DiaryBox>
                <h3>{selected.title}</h3>
                <img src={selected.image} alt={selected.title} />
                <DateWeather>
                    {selected.campingDate} {selected.weather}
                </DateWeather>
                <Comment> {selected.comment} </Comment>
            </DiaryBox>
        </>
    );
};

export default DiaryDetail;

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
