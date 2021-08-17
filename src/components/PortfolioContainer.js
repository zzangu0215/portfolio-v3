import React, { useState } from "react";
import Menu from "./Menu/Menu";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "AboutMe":
        return <AboutMe />;
      default:
        return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Menu currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
