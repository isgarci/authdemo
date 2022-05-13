import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhiteboardItemList from "./WhiteboardItemList";
import CreateUser from "./CreateUser"
import SuperLogin from "./SuperLogin"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/login"}>
            <SuperLogin />
          </Route>
          <Route path={"/whiteboardItems"}>
            <WhiteboardItemList />
          </Route>
          <Route path={"/createUser"}>
            <CreateUser />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}