import { useRef } from "react";
import NavigationComponent from "../component/navigation.component";
import AboutMePage from "../page/about-me.page";
import CareerPage from "../page/career.page";
import EndingPage from "../page/ending.page";
import IntroPage from "../page/intro.page";
import ProjectPage from "../page/project.page";

const MainTemplate = () => {
  // const [scrollY, setScrollY] = useState(0);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    console.log(id);
    switch (id) {
      case "aboutMe":
        aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "career":
        careerRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "project":
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", dd);
  //   return () => {
  //     window.removeEventListener("scroll", () => {});
  //   };
  // }, []);
  // const dd = () => {
  //   setScrollY(window.scrollY);
  // };
  return (
    <>
      {/* <div className="content" style={{ marginTop: `-${scrollY}px` }}> */}
      <div className="content">
        <IntroPage></IntroPage>
        <div ref={aboutMeRef}>
          <AboutMePage></AboutMePage>
        </div>
        <div ref={careerRef}>
          <CareerPage></CareerPage>
        </div>
        <div ref={projectRef}>
          <ProjectPage></ProjectPage>
        </div>
        <EndingPage></EndingPage>
        <NavigationComponent
          scrollToScreen={scrollToSection}
        ></NavigationComponent>
      </div>
    </>
  );
};

export default MainTemplate;
