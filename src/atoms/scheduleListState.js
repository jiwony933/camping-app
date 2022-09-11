import { atom } from "recoil";

export const scheduleListState = atom({
    key: "scheduleListState",
    default: [
        {
            id: 1,
            startDate: "2022-09-01",
            endDate: "2022-09-02",
            spot: "양양죽도오토캠핑장",
        },
        {
            id: 2,
            startDate: "2022-08-02",
            endDate: "2022-08-03",
            spot: "가평 자라섬 캠핑장",
        },
        {
            id: 3,
            startDate: "2022-10-02",
            endDate: "2022-10-03",
            spot: "충주호 캠핑장",
        },
    ], // default value (aka initial value)
});
