import styled from "@emotion/styled";

const DiaryItem = ({ item, onClick }) => {
    return (
        <Container onClick={onClick}>
            <DiaryImg>
                <img src={item.image} alt={item.titleß} />
            </DiaryImg>
            <DiaryText>
                <Text>{item.campingDate}</Text>
                <Text>{item.title}</Text>
                <SmallText>{item.comment}</SmallText>
            </DiaryText>
        </Container>
    );
};

export default DiaryItem;

const Container = styled.div`
    height: 130px;
    width: 90vw;
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 20px;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const DiaryImg = styled.div`
    width: 160px;
    margin: 10px;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`;

const DiaryText = styled.div`
    color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

const SmallText = styled.div`
    color: black;
    font-size: 15px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

const Text = styled.div`
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 5px;
`;
