import { atom } from "recoil";

export const foodListState = atom({
  key: "foodListState",
  default: [
    {
      id: 1,
      comment: "핵 존 맛",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgH9B0WMhDpPo9vcsuWModkzH1GNm6I0HVJFPKBjvNg&s",
      uploadDate: "2022-07-24",
    },
    {
      id: 2,
      comment: "핵 존 맛",
      image: "https://t1.daumcdn.net/cfile/tistory/2768BC385211CB7221",
      uploadDate: "2022-07-24",
    },
    {
      id: 3,
      comment: "핵 존 맛",
      image:
        "http://m.fooking.kr/web/product/extra/big/202107/c9b73bf07e14245a5adfc884dd38a880.jpg",
      uploadDate: "2022-07-24",
    },
    {
      id: 4,
      comment: "핵 존 맛",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgH9B0WMhDpPo9vcsuWModkzH1GNm6I0HVJFPKBjvNg&s",
      uploadDate: "2022-07-24",
    },
    {
      id: 5,
      comment: "핵 존 맛",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgH9B0WMhDpPo9vcsuWModkzH1GNm6I0HVJFPKBjvNg&s",
      uploadDate: "2022-07-24",
    },
  ], // default value (aka initial value)
});
