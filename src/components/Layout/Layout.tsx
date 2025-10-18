import React from "react";
import NavBar from "../NavBar/NavBar";
 


interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar /> 
      <main>{children}</main>  
    </>
  );
};

export default Layout;