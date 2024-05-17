import { useState } from "react";
import ProjectCardComponent from "../component/project-card.component";
import TitleComponent from "../component/title.component";
import YearsComponent from "../component/years.component";
import "../style/project.style.scss";

const ProjectPage = () => {
  const project = [
    {
      title: "PORTFOLIO",
      ment: "포트폴리오 소개 사이트",
      period: "2024",
      detail: "/portfolio",
      picture: "/screenshot/portfolio.png",
      github_c: "https://github.com/Yoon1996/portfolio",
    },
    {
      title: "PLAYGROUND",
      ment: "서울 공공 체육시설 예약 웹사이트",
      period: "2024",
      picture: "/screenshot/playground.png",
      detail: "/playground",
      github_c: "https://github.com/Yoon1996/playground_client",
      github_s: "https://github.com/Yoon1996/playground_server",
    },
    {
      title: "MORE(모두의 레시피)",
      ment: "레시피 저장 웹 사이트",
      period: "2023",
      picture: "/screenshot/more.png",
      detail: "/more",
      github_c: "https://github.com/Yoon1996/more_client",
      github_s: "https://github.com/Yoon1996/more_server",
    },
    {
      title: "WOONGJIN",
      ment: "웅진 웹 사이트 리디자인",
      period: "2022",
      picture: "/screenshot/woongjin.png",
    },
    {
      title: "TOUS",
      ment: "뚜레쥬르 클론 코딩 사이트",
      period: "2022",
      picture: "/screenshot/tous.png",
    },
    {
      title: "CARTRIDER",
      ment: "넥슨 카트라이더 클론 코딩 사이트",
      period: "2022",
      picture: "/screenshot/cartrider.png",
    },
    {
      title: "MYPROTEIN",
      ment: "마이 프로틴 클론 코딩 사이트",
      period: "2022",
      picture: "/screenshot/myprotein.png",
    },
    {
      title: "LOREAL",
      ment: "로레알 클론 코딩 사이트",
      period: "2022",
      picture: "/screenshot/loreal.png",
    },
  ];
  const [filter, setFilter] = useState<string>("");
  const selectFilter = (select: string) => {
    setFilter(select);
  };
  const filteredProjects =
    !filter || filter === "All"
      ? project
      : project.filter((item) => item.period === filter);
  return (
    <>
      <TitleComponent title="Project"></TitleComponent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <YearsComponent selectFilter={selectFilter}></YearsComponent>
        <div className="project">
          <div className="project__list">
            {filteredProjects.map((pr, index) => (
              <ProjectCardComponent
                key={index}
                info={pr}
              ></ProjectCardComponent>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
