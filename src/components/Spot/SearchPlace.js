import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import SpotDetail from "./SpotDetail";

function SearchPlace() {
  const [spots, setSpots] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.visitkorea.or.kr/openapi/service/rest/GoCamping/searchList?ServiceKey=eoa%2FGqND7kc4kFyYrprGMRO2HR7PqGaqIpR197C4GKlnXAHAU0SbPSWitA%2BbOwTpcKFeXNXbmFkMxsj%2BpdosNA%3D%3D&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json&keyword=${encodeURIComponent(
          searchTerm
        )}`
      );

      const json = await response.json();

      if (json.response.body.items.item) {
        setSpots(json.response.body.items.item);
      } else {
        setSpots([]);
      }
    };
    fetchData();
  }, [searchTerm]);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [selected, setSelected] = useState();
  const handleSpotClick = (contentId) => {
    setSelected(spots.find((el) => el.contentId === contentId));
  };

  return (
    <div>
      <h2>캠핑장 검색</h2>
      <SearchBoard>
        <SeachBar
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="캠핑장을 검색하세요"
        />

        {spots.length >= 1 ? (
          spots.map((spot) => (
            <SearchResult onClick={() => handleSpotClick(spot.contentId)}>
              <strong>{spot.facltNm}</strong>
              {"\n"}
              {spot.addr1}
            </SearchResult>
          ))
        ) : (
          <span>결과 없음</span>
        )}
      </SearchBoard>

      {selected && <SpotDetail selected={selected} setSelected={setSelected} />}
    </div>
  );
}

const SearchBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SeachBar = styled.input`
  width: 90vw;
  height: 40px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const SearchResult = styled.div`
  background-color: white;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  width: 90vw;
  margin-bottom: 5px;
  padding: 5px;

  a:hover {
    color: blue;
  }
`;

export default SearchPlace;
