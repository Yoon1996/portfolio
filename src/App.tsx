import "./App.scss";
import HeaderComponent from "./component/header.component";
import AboutMePage from "./page/about-me.page";
import IntroPage from "./page/intro.page";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <IntroPage></IntroPage>
      <AboutMePage></AboutMePage>
    </>
  );
}

export default App;
