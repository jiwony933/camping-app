import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.js";
import Schedule from "./components/Schedule";
import Diary from "./components/Diary/DiaryList";
import CheckList from "./components/CheckList/WriteCheckList";
import Place from "./components/Spot/SearchPlace";
import MyPage from "./components/MyPage/index";
import FoodList from "components/Food/FoodList";
import UploadFood from "components/Food/UploadFood";
import UploadDiary from "components/Diary/UploadDiary";
import { RecoilRoot } from "recoil";
import Home from "./components/Home/index.js";
import Logo from "layout/Logo";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
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
