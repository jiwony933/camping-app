import React, { useEffect, useState } from "react";

function SearchPlace() {
  const [loading, setLoading] = useState(true);
  const [spot, setSpot] = useState([]);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=eoa%2FGqND7kc4kFyYrprGMRO2HR7PqGaqIpR197C4GKlnXAHAU0SbPSWitA%2BbOwTpcKFeXNXbmFkMxsj%2BpdosNA%3D%3D&numOfRows=${rows}&pageNo=${page}&MobileOS=ETC&MobileApp=TestApp&_type=json`
      );

      const json = await response.json();
      setSpot(json.response.body.items.item);
    };
    fetchData();

    // fetch(
    //   `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=eoa%2FGqND7kc4kFyYrprGMRO2HR7PqGaqIpR197C4GKlnXAHAU0SbPSWitA%2BbOwTpcKFeXNXbmFkMxsj%2BpdosNA%3D%3D&numOfRows=${rows}&pageNo=${page}&MobileOS=ETC&MobileApp=TestApp&_type=json`
    // )
    //   .then((response) => response.json())
    //   .then((json) => setSpot(json.response.body.items.item));
  }, [page, rows]);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleNextPageClick = () => {
    setPage(page + 1);
  };

  const handleAddCount = () => {
    setRows(rows + 10);
  };

  return (
    <div>
      <p>
        캠핑장 검색{" "}
        {loading
          ? "loading..."
          : spot.map((spot) => <div key={spot.bizrno}>{spot.facltNm}</div>)}
      </p>
      <button onClick={handleNextPageClick}>다음 페이지</button>
      <button onClick={handleAddCount}>10개씩 더보기</button>
    </div>
  );
}

export default SearchPlace;
