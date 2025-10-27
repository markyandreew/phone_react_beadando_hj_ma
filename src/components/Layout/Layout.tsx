import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
 


interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar /> 
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;