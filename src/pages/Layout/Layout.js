import React from "react";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import LayoutProvider from "../../contexts/layout";
const Layout = () => {
  return (
    <>
      <LayoutProvider>
        <NavBar />
        <SideBar />
        <Outlet />
        <Footer />
      </LayoutProvider>
    </>
  );
};
export default Layout;
