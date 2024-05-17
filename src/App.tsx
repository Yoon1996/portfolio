import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MorePortfolio from "./portfolio/more.portfolio";
import PlaygroundPortfolio from "./portfolio/playground.portfolio";
import PortfolioPortfolio from "./portfolio/portfolio.portfolio";
import MainTemplate from "./template/main.template";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainTemplate></MainTemplate>}></Route>
          <Route
            path="playground"
            element={<PlaygroundPortfolio></PlaygroundPortfolio>}
          ></Route>
          <Route path="more" element={<MorePortfolio></MorePortfolio>}></Route>
          <Route
            path="portfolio"
            element={<PortfolioPortfolio></PortfolioPortfolio>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
