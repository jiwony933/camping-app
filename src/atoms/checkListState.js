import { atom } from "recoil";

export const checkListState = atom({
    key: "checkListState",
    default: [
        { id: 1, item: "텐트", checked: "checked" },
        { id: 2, item: "테이블", checked: "checked" },
        { id: 3, item: "의자", checked: "checked" },
    ], // default value (aka initial value)
});
