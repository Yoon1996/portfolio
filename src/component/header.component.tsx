import { useEffect, useState } from "react";
import "../style/header.style.scss";
const HeaderComponent = () => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <div className={`header${show ? "" : "__hidden"}`}>
        <div className="header__menu">About Me</div>
        <div className="header__menu">Career</div>
        <div className="header__menu">Project</div>
      </div>
    </>
  );
};

export default HeaderComponent;
