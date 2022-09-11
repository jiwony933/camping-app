import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Home/Nav.js";
import Schedule from "./components/Schedule/index.js";
import WriteSchedule from "components/Schedule/WriteSchedule";
import Diary from "./components/Diary/Index";
import CheckList from "./components/CheckList/WriteCheckList";
import Place from "./components/Spot/SearchSpot";
import MyPage from "./components/MyPage/index";
import FoodList from "components/Food/FoodList";
import UploadFood from "components/Food/UploadFood";
import UploadDiary from "components/Diary/Upload";
import { RecoilRoot } from "recoil";
import Home from "./components/Home/index.js";
import Logo from "layout/Logo";

function Router() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/schedule/upload" element={<WriteSchedule />} />
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

export default Router;
