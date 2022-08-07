import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainBoard from "./components/MainBoard.js";
import Nav from "./components/Nav.js";
import Schedule from "./components/WriteSchedule";
import Diary from "./components/WriteDiary";
import CheckList from "./components/WriteCheckList";
import Place from "./components/SearchPlace";
import MyPage from "./components/MyPage";
import AppRouter from "./components/router";
import { authService } from "./fbase";
import FoodList from "components/food/FoodList";
import UploadFood from "components/food/UploadFood";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    // <>
    //   <AppRouter isLoggedIn={isLoggedIn} />
    //   <footer>&copy;camping app {new Date().getFullYear()}</footer>
    // </>
    <BrowserRouter>
      <div>Logo</div>
      <Routes>
        <Route path="/" element={<MainBoard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/food" element={<FoodList />} />
        <Route path="/food/upload" element={<UploadFood />} />
        <Route path="/checklist" element={<CheckList />} />
        <Route path="/place" element={<Place />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
