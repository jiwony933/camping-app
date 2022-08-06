import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

function SearchPlace() {
  const [spot, setSpot] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=eoa%2FGqND7kc4kFyYrprGMRO2HR7PqGaqIpR197C4GKlnXAHAU0SbPSWitA%2BbOwTpcKFeXNXbmFkMxsj%2BpdosNA%3D%3D&numOfRows=4000&MobileOS=ETC&MobileApp=TestApp&_type=json`
      );

      const json = await response.json();
      setSpot(json.response.body.items.item);
    };
    fetchData();
  }, []);

  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const filterName = spot.filter((p) => {
    return p.facltNm.replace(" ", "").includes(search);
  });

  return (
    <div>
      <input type="text" value={search} onChange={onChange} />

      <SearchResultBoard>
        {filterName.map((spot) => (
          <SearchResult>
            <strong>{spot.facltNm}</strong>
            {"\n"}
            {spot.addr1}
          </SearchResult>
        ))}
      </SearchResultBoard>
    </div>
  );
}

const SearchResultBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchResult = styled.div`
  background-color: white;
  height: 40px;
  border-radius: 5px;
  font-size: 13px;
  width: 90%;
  margin-bottom: 5px;
  padding: 5px;
`;

export default SearchPlace;
