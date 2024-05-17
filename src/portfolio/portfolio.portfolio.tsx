import SkillsComponent from "../component/skills.component";
import "../style/portfolio.scss";
const PortfolioPortfolio = () => {
  const skills = ["html", "css", "ts", "react", "vite", "sass"];
  return (
    <>
      <div className="portfolio">
        <div className="portfolio__header">
          <div className="portfolio__title">PORTFOLIO</div>
          <div className="portfolio__period">2024.05.11 - 진행중</div>
          <div className="portfolio__type">개인 프로젝트</div>
        </div>
        <div className="portfolio__main">
          <div className="portfolio__intro">
            저의 지난 포트폴리오들을 글이 아닌 시각적으로 나타내게 하기 위해
            제작 하였습니다.
          </div>
          <div className="portfolio__feature">
            <div className="portfolio__menu-title">주요 기능 및 특징</div>
            <div className="portfolio__feature-content">
              <div className="portfolio__feature-client">
                <div className="portfolio__menu-small-title">클라이언트</div>
                <div>•나만의 포트폴리오를 연도별로 볼 수 있도록 필터 적용</div>
                <div>
                  •Intersection Observer API 를 사용 하여 scroll 시 target
                  element 보여주는 기능 사용
                </div>
                <div>•TypeIt api 사용</div>
                <div>
                  •관점 지향 프로그래밍의 개념에 따라 template, page, component
                  폴더를 분리해 화면에서 표현되는 컴포넌트들을 효율적으로 관리
                </div>
                <div>
                  •파일들을 모듈화 시켜 재사용에 용이하게 util 폴더를 만들어
                  관리
                </div>
                <div>
                  •css의 custom properties 를 이용한 컬러시스템(palette)과
                  폰트사이즈, 폰트색상 변수화
                </div>
                <div>
                  •vite의 최신 브라우저의 기본 ES 모듈 기능을 사용하여 더 빠른
                  개발 서버 시작 가능
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio__skill">
            <div className="portfolio__menu-title">사용 기술 및 언어</div>
            <div
              className="portfolio__menu-content"
              style={{ marginBottom: "80px" }}
            >
              {skills.map((skill, index) => (
                <div key={index} className="portfolio__skill-wrap">
                  <SkillsComponent skill={skill}></SkillsComponent>
                  <div>{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPortfolio;
