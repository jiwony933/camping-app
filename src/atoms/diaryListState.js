import { atom } from "recoil";

export const diaryListState = atom({
  key: "diaryListState",
  default: [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/36/1c/7f/361c7f55af34246616fe33b415157ab8.jpg",
      title: "여름 계곡 캠핑",
      comment:
        "친구들이랑 2박 3일 강원도 캠핑을 갔는데 어쩌구저쩌구 어쩌구저쩌구 어쩌구저쩌구 어쩌구저쩌구 어쩌구저쩌구 어쩌구저쩌구 어쩌구저쩌구 어쩌구저쩌구",
      weather: "맑음",
      campingDate: "2022-07-24",
    },
    {
      id: 2,
      image:
        "https://cdn.san.chosun.com/news/photo/201604/10011_40672_3946.jpg",
      title: "바다 캠핑",
      comment:
        "혼자서 첫 바다 캠핑을 갔는데 바다바다 바다바다 바다바다 바다바다 바다바다 바다바다 바다바다 바다바다 바다바다 바다바다 바다바다 바다바다 바다바다 바다바다 바다바다",
      weather: "맑음",
      campingDate: "2022-07-24",
    },
    {
      id: 3,
      image: "http://www.travelnbike.com/news/photo/201711/49140_58575_590.jpg",
      title: "겨울 캠핑",
      comment:
        "겨울 캠핑 너므 추워 겨울 캠핑 너므 추워 겨울 캠핑 너므 추워 겨울 캠핑 너므 추워 겨울 캠핑 너므 추워 겨울 캠핑 너므 추워 겨울 캠핑 너므 추워 겨울 캠핑 너므 추워 겨울 캠핑 너므 추워 겨울 캠핑 너므 추워 겨울 캠핑 너므 추워 겨울 캠핑 너므 추워 ",
      weather: "흐림",
      campingDate: "2022-07-24",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/01/6e/65/016e657c1510bad5899eabbcea0d4bb8.jpg",
      title: "첫 백패킹 도전",
      comment:
        "아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 아휴 힘들었따 ",
      weather: "맑음",
      campingDate: "2022-07-24",
    },
  ], // default value (aka initial value)
});
