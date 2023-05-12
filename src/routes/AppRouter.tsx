import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Layout />}>
          <Route path={`home`} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
