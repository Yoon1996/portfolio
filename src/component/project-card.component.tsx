import { useState } from "react";
import "../style/project-card.style.scss";
import { useNavigate } from "react-router-dom";

interface IProjectCardProps {
  info: {
    title: string;
    ment: string;
    picture: string;
    detail?: string;
    github_c?: string;
    github_s?: string;
  };
}
const ProjectCardComponent = ({ info }: IProjectCardProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const navigate = useNavigate();
  const mouseOverHandling = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHover(true);
  };
  const mouseOutHandling = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHover(false);
  };
  return (
    <>
      <div
        className="project-card"
        onMouseOut={(e) => mouseOutHandling(e)}
        onMouseOver={(e) => mouseOverHandling(e)}
      >
        {hover ? (
          <>
            <div
              className="project-card__wrap"
              style={{ alignItems: "center" }}
            >
              <div className="project-card__title">{info.title}</div>
              <div className="project-card__button-wrap">
                <div
                  className="project-card__button"
                  onClick={() => navigate(`${info.detail}`)}
                >
                  자세히 보기
                </div>
                {info.github_c ? (
                  <>
                    <div className="project-card__button">
                      <a href={`${info.github_c}`}>Github 클라이언트</a>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {info.github_s ? (
                  <>
                    <div className="project-card__button">
                      <a href={`${info.github_s}`}>Github 서버</a>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="project-card__wrap">
              <div className="project-card__img">
                <img src={info.picture} alt="" />
              </div>
              <div className="project-card__info">
                <div className="project-card__title">{info.title}</div>
                <div>{info.ment}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProjectCardComponent;
