import React from "react";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Layout><Home/></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
