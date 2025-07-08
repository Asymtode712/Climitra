import { useState } from "react";
import ClimitraEngine from "./components/ClimitraEngine";
import CDRPage from "./components/CDRPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "cdr":
        return <CDRPage />;
      default:
        return <ClimitraEngine />;
    }
  };

  // Make setCurrentPage globally available for navigation
  window.navigateTo = setCurrentPage;

  return <div className="App">{renderPage()}</div>;
}

export default App;
