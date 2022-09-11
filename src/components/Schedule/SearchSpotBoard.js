import React from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const SearchSpotBoard = ({
    spots,
    setSpots,
    searchTermChanged,
    selected,
    setSelected,
    handleSpotClick,
    searchTerm,
    setSearchTerm,
}) => {
    return (
        <Container>
            <SearchInput
                value={searchTerm}
                onChange={searchTermChanged}
                placeholder="캠핑장 검색"
            />
            <SearchResultBoard key={spots.facltNm}>
                {spots.length > 0 ? (
                    spots.sort().map((spot) => (
                        <SearchResultItem
                            onClick={() => handleSpotClick(spot.contentId)}
                        >
                            <DoName>{spot.doNm}</DoName>
                            <SpotName>{spot.facltNm}</SpotName>
                        </SearchResultItem>
                    ))
                ) : (
                    <div>결과 없음</div>
                )}
            </SearchResultBoard>
        </Container>
    );
};

export default SearchSpotBoard;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SearchInput = styled.input`
    all: unset;
    background-color: white;
    padding: 10px;
    width: 70%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const SearchResultBoard = styled.div`
    margin-top: 20px;
    max-height: 200px;
    overflow-y: scroll;
`;

const SearchResultItem = styled.div`
    display: flex;
    width: 350px;
    margin: 5px;

    padding: 8px;
    border-radius: 5px;
    background-color: white;

    :hover {
        cursor: pointer;
        background-color: aliceblue;
    }
`;

const DoName = styled.div`
    color: gray;
    margin-right: 10px;
    width: 20%;
    font-size: 14px;
`;

const SpotName = styled.div``;

const SelectedSpot = styled.div`
    bottom: 80px;
    background-color: yellow;
`;
