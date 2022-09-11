import styled from "@emotion/styled";

const FoodItem = ({ image, uploadDate, comment }) => {
    return (
        <Container>
            <img src={image} alt={comment}></img>
            <FoodName>{comment}</FoodName>
            <UploadDate>{uploadDate}</UploadDate>
        </Container>
    );
};

export default FoodItem;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid;
    width: 90%;
    height: 280px;
    padding: 10px;
    text-align: center;

    img {
        width: 100%;
        height: 200px;
        border-radius: 16px;
    }
`;

const FoodName = styled.span`
    display: block;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 600;
`;

const UploadDate = styled.span`
    display: block;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 300;
    color: gra;
`;
