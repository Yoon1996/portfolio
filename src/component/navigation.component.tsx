import React, { useEffect, useState } from "react";
import "../style/navigation.style.scss";

interface navigationProps {
  scrollToScreen: (id: string) => void;
}
const NavigationComponent = ({ scrollToScreen }: navigationProps) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [meMenu, setMeMenu] = useState<boolean>(false);
  const [careerMenu, setCareerMenu] = useState<boolean>(false);
  const [projectMenu, setProjectMenu] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const changeMeMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMeMenu(true);
  };

  const reChangeMeMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMeMenu(false);
  };
  const changeCareerMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCareerMenu(true);
  };

  const reChangeCareerMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCareerMenu(false);
  };
  const changeProjectMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProjectMenu(true);
  };

  const reChangeProjectMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProjectMenu(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`navigation${isSticky ? "__sticky" : ""}`}>
        <div
          onMouseOver={(e) => {
            changeMeMenu(e);
          }}
          onMouseOut={(e) => reChangeMeMenu(e)}
          onClick={() => scrollToScreen("aboutMe")}
          className={`navigation__menu${meMenu ? "__animation" : ""}`}
        >
          {meMenu ? (
            <div className="navigation__menu-ment">About Me</div>
          ) : (
            <>
              <img src="/icon/aboutme.png" alt="" />
            </>
          )}
        </div>
        <div
          onMouseOver={(e) => changeCareerMenu(e)}
          onMouseOut={(e) => reChangeCareerMenu(e)}
          onClick={() => scrollToScreen("career")}
          className={`navigation__menu${careerMenu ? "__animation" : ""}`}
        >
          {careerMenu ? (
            <div className="navigation__menu-ment">Career & Edu</div>
          ) : (
            <>
              <img src="/icon/career.png" alt="" />
            </>
          )}
        </div>
        <div
          onMouseOver={(e) => changeProjectMenu(e)}
          onMouseOut={(e) => reChangeProjectMenu(e)}
          onClick={() => scrollToScreen("project")}
          className={`navigation__menu${projectMenu ? "__animation" : ""}`}
        >
          {projectMenu ? (
            <div className="navigation__menu-ment">Project</div>
          ) : (
            <>
              <img src="/icon/project.png" alt="" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationComponent;
