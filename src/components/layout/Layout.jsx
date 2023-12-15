import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import './Layout.scss'

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
