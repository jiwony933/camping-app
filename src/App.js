import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainBoard from "./components/MainBoard.js";
import Nav from "./components/Nav.js";
import Schedule from "./components/WriteSchedule";
import Diary from "./components/diary/DiaryList";
import CheckList from "./components/CheckList/WriteCheckList";
import Place from "./components/Spot/SearchPlace";
import MyPage from "./components/MyPage/MyPage";
import FoodList from "components/food/FoodList";
import UploadFood from "components/food/UploadFood";
import UploadDiary from "components/diary/UploadDiary";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div>Logo</div>
        <Routes>
          <Route path="/" element={<MainBoard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/diary/upload" element={<UploadDiary />} />
          <Route path="/food" element={<FoodList />} />
          <Route path="/food/upload" element={<UploadFood />} />
          <Route path="/checklist" element={<CheckList />} />
          <Route path="/place" element={<Place />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Nav />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
