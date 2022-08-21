import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    id: 1,
    name: "jiwon",
    age: 18,
  },
});
