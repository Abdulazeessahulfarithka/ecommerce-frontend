// Layout.js
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import './Layout.css'; // Import the CSS file

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "300vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
