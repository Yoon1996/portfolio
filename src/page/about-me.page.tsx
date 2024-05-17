import { useEffect, useRef, useState } from "react";
import SkillsComponent from "../component/skills.component";
import TitleComponent from "../component/title.component";
import "../style/about-me.style.scss";

const AboutMePage = () => {
  const front = ["html", "css", "js", "ts", "react", "sass", "github"];
  const back = [
    "redux",
    "recoil",
    "nestjs",
    "nodejs",
    "express",
    "mysql",
    "sequelize",
  ];
  const design = ["figma"];

  const [characterShow, setCharacterShow] = useState<boolean>(false);
  const [skillsShow, setSkillsShow] = useState<boolean>(true);
  const character = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCharacterShow(true);
          } else {
            setCharacterShow(false);
          }
        });
      },
      { threshold: 0.5 } // 화면에 절반 이상 보일 때 인식
    );
    if (character.current) {
      cObserver.observe(character.current);
    }

    const SObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsShow(true);
          } else {
            setSkillsShow(false);
          }
        });
      },
      { threshold: 1 } // 화면에 절반 이상 보일 때 인식
    );
    if (skills.current) {
      SObserver.observe(skills.current);
    }
  }, []);
  return (
    <>
      <TitleComponent title="About Me"></TitleComponent>
      <div className="about">
        <div
          ref={character}
          className={`about__character${characterShow ? "__show" : ""}`}
        >
          <div className="about__character-img">
            <img src="/icon/me1.png" alt="" />
          </div>
          <div className="about__character-img">
            <img src="/icon/me2.png" alt="" />
          </div>
        </div>
        <div className="about__main-ment">케이크 디자이너에서 개발자로!</div>
        <div className="about__sub-ment">
          <div className="about__sub-q">Q. 왜?</div>
          <div className="about__sub-answer">
            <br /> 어려서부터 디자인에 관심이 많았습니다. <br /> 주문 제작
            케이크를 통해 많은 디자인을 접하게 되었고, 케이크 뿐만 아니라 다른
            방식으로도 디자인을 해보고 싶다고 느끼게 되었습니다. <br />
            또한 수기로 하나하나 입력하는게 아닌 자동화된 코드를 이용하여
            효율적으로 업무를 처리 하는 것에도 매력을 느끼게 되었습니다.
          </div>
        </div>
        <div className="about__main-ment">skills</div>
        <div className={`about__skill-wrap${skillsShow ? "__show" : ""}`}>
          <div className="about__skill-content">
            <div className="about__skill-title">FrontEnd</div>
            <div className="about__skills">
              {front.map((front, index) => (
                <SkillsComponent key={index} skill={front}></SkillsComponent>
              ))}
            </div>
          </div>
          <div className="about__skill-content">
            <div className="about__skill-title">BackEnd</div>
            <div className="about__skills">
              {back.map((back, index) => (
                <SkillsComponent key={index} skill={back}></SkillsComponent>
              ))}
            </div>
          </div>
          <div className="about__skill-content">
            <div className="about__skill-title">Design</div>
            <div className="about__skills">
              {design.map((design, index) => (
                <SkillsComponent key={index} skill={design}></SkillsComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
