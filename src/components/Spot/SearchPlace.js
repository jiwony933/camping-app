import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import SpotDetail from "./SpotDetail";

function SearchPlace() {
  const [spot, setSpot] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.visitkorea.or.kr/openapi/service/rest/GoCamping/searchList?ServiceKey=eoa%2FGqND7kc4kFyYrprGMRO2HR7PqGaqIpR197C4GKlnXAHAU0SbPSWitA%2BbOwTpcKFeXNXbmFkMxsj%2BpdosNA%3D%3D&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json&keyword=${search}`
      );

      const json = await response.json();
      setSpot(json.response.body.items.item);
    };
    fetchData();
  }, [search]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const filterName = spot.filter((p) => {
    return p.facltNm.includes(search.replaceAll(" ", ""));
  });
  const [selected, setSelected] = useState();
  const handleSpotClick = (contentId) => {
    setSelected(spot.find((el) => el.contentId === contentId));
  };

  return (
    <div>
      <h2>캠핑장 검색</h2>
      <SearchBoard>
        <SeachBar
          type="text"
          value={search}
          onChange={onChange}
          placeholder="캠핑장을 검색하세요"
        />

        {filterName.map((spot) => (
          <SearchResult onClick={() => handleSpotClick(spot.contentId)}>
            <strong>{spot.facltNm}</strong>
            {"\n"}
            {spot.addr1}
          </SearchResult>
        ))}
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
  width: 80vw;
  height: 40px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const SearchResult = styled.div`
  background-color: white;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  width: 80vw;
  margin-bottom: 5px;
  padding: 5px;
`;

export default SearchPlace;
