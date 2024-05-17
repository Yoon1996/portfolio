import SkillsComponent from "../component/skills.component";
import "../style/portfolio.scss";
const MorePortfolio = () => {
  const skills = [
    "html",
    "css",
    "js",
    "react",
    "sass",
    "nodejs",
    "express",
    "mysql",
    "sequelize",
    "github",
    "redux",
  ];
  return (
    <>
      <div className="portfolio">
        <div className="portfolio__header">
          <div className="portfolio__title">MORE(모두의 레시피)</div>
          <div className="portfolio__period">2023.08 - 2023.12</div>
          <div className="portfolio__type">
            팀 프로젝트(2인/개발1인, 디자인1인)
          </div>
        </div>
        <div className="portfolio__main">
          <div className="portfolio__intro">
            개발 공부를 하기 전 제과제빵 업계에서 일을 했었습니다. <br />{" "}
            제과제빵 업계는 아직까지 아날로그식 시스템으로 일이 진행되고
            있습니다. <br /> 레시피들을 낡은 노트가 아닌 컴퓨터나 모바일
            화면으로 즉시 보고, 저장 할 수 있으면 좋지 않을까 하고 제작 하게 된
            저의 첫 개발 웹사이트입니다. <br />
            현재 구글에서 https redirect URI 를 권장하여 도메인을 따로 구입
            하지않은 관계로 소셜 로그인은 기능하지 않습니다.
          </div>
          <div className="portfolio__feature">
            <div className="portfolio__menu-title">주요 기능 및 특징</div>
            <div className="portfolio__feature-content">
              <div className="portfolio__feature-client">
                <div className="portfolio__menu-small-title">클라이언트</div>
                <div>
                  •accessToken 을 로컬스토리지에 저장하는 방식으로 로그인 구현
                </div>
                <div>
                  •로컬스토리지에 저장 되어 있는 Access Token을 request의 header
                  에 담아 서버에 요청 후 검증
                </div>
                <div>
                  •하여 회원이 아닌 사용자의 사이트 접근을 방지 하기 위한 guard
                  구현
                </div>
                <div>
                  •관점 지향 프로그래밍의 개념에 따라 template, layout, page
                  폴더 를 분리해 화면에서 표현되는 컴 포넌트들을 효율적으로
                  관리.
                </div>
                <div>
                  •파일들을 모듈화 시켜 재사용에 용이하게 util 폴더를 만들어
                  관리
                </div>
                <div>
                  •redux 를 사용하여 글로벌 상태변화(로그인, 레시피 리스트
                  렌더링) 구현
                </div>
                <div>
                  •react 환경에서의 불필요한 props drilling을 피하기 위함
                </div>
                <div>
                  •자주 사용 되는 button 이나 input 을 컴포넌트화 하여
                  유지보수에 용이하게함
                </div>
                <div>
                  •css의 custom properties 를 이용한 컬러시스템(palette) 구축
                </div>
              </div>
              <div className="portfolio__feature-back">
                <div className="portfolio__menu-small-title">백엔드</div>
                <div>•AWS의 인프라를 이용한 서버 구축(ec2, s3, RDS)</div>
                <div>•express 를 이용한 백엔드 서버 구축 및 DB 구축</div>
                <div>
                  •api 들을 유지, 보수에 용이하게 하기 위해 route 파일을
                  도메인별로 나눔
                </div>
                <div>
                  •MySQL 모델 관계 설정(relation) 을 활용한 북마크, 레시피의
                  재료(다수)를 추가
                </div>
                <div>
                  •ORM 라이브러리중 하나인 sequelize를 사용 하고 schema를 만듦
                </div>
                <div>•사용자 인증을 하기 위한 middleware 구현</div>
                <div>
                  •회원이 아닌 사용자의 특정 동작을 방지하기 위한 guard 구현
                </div>
                <div>
                  •데이터베이스나 사용자의 인증 관리를 위한 파일들을 모듈화 시켜
                </div>
                <div>
                  •재사용성과 유지 보수에 용이하게 util 폴더에 나눠서 관리
                </div>
                <div>
                  •중요한 정보들을 외부에 노출되지 않게 config폴더를 만들어 관리
                </div>
                <div>•mailSender를 이용한 이메일 인증</div>
                <div>•bcrypt를 이용한 패스워드 생성</div>
                <div>•googleOAuth2를 이용한 구글 소셜 로그인 구현</div>
                <div>•getSignedUrl을 이용한 사진 저장, 수정 기능 구현</div>
              </div>
            </div>
          </div>
          <div className="portfolio__skill">
            <div className="portfolio__menu-title">사용 기술 및 언어</div>
            <div className="portfolio__menu-content">
              {skills.map((skill, index) => (
                <div key={index} className="portfolio__skill-wrap">
                  <SkillsComponent skill={skill}></SkillsComponent>
                  <div>{skill}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="portfolio__pictures">
            <div className="portfolio__menu-title">작업 사진</div>
            <div className="portfolio__picture">
              <div className="portfolio__picture-img">
                <img src="/screenshot/more/main.png" alt="" />
                <div className="portfolio__picture-ment">메인 화면</div>
              </div>
              <div className="portfolio__picture-img">
                <img src="/screenshot/more/main-2.png" alt="" />
                <div className="portfolio__picture-ment">메인 화면(리스트)</div>
              </div>
              <div className="portfolio__picture-img">
                <img src="/screenshot/more/save.png" alt="" />
                <div className="portfolio__picture-ment">등록</div>
              </div>
              <div className="portfolio__picture-img">
                <img src="/screenshot/more/login.png" alt="" />
                <div className="portfolio__picture-ment">로그인</div>
              </div>
              <div className="portfolio__picture-img">
                <img src="/screenshot/more/signup.png" alt="" />
                <div className="portfolio__picture-ment">회원 가입</div>
              </div>
              <div className="portfolio__picture-img">
                <img src="/screenshot/more/info.png" alt="" />
                <div className="portfolio__picture-ment">사용자 정보</div>
              </div>
              <div className="portfolio__picture-img">
                <img src="/screenshot/more/category.png" alt="" />
                <div className="portfolio__picture-ment">카테고리 등록</div>
              </div>
              <div className="portfolio__picture-img">
                <img src="/screenshot/more/withdraw.png" alt="" />
                <div className="portfolio__picture-ment">회원 탈퇴</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MorePortfolio;
