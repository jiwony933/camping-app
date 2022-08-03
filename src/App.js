import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainBoard from "./components/MainBoard.js";
import Nav from "./components/Nav.js";
import Schedule from "./components/WriteSchedule";
import Diary from "./components/WriteDiary";
import Food from "./components/WriteFood";
import CheckList from "./components/WriteCheckList";
import Place from "./components/SearchPlace";
import MyPage from "./components/MyPage";

function App() {
  return (
    <BrowserRouter>
      <div>Logo</div>
      <Routes>
        <Route path="/" element={<MainBoard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/food" element={<Food />} />
        <Route path="/checklist" element={<CheckList />} />
        <Route path="/place" element={<Place />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}

export default App;