import SkillsComponent from "../component/skills.component";
import "../style/portfolio.scss";
const PlaygroundPortfolio = () => {
  const skills = [
    "html",
    "css",
    "ts",
    "react",
    "vite",
    "tailwind",
    "nestjs",
    "mysql",
    "github",
    "recoil",
  ];
  return (
    <>
      <div className="portfolio">
        <div className="portfolio__header">
          <div className="portfolio__title">PLAYGROUND</div>
          <div className="portfolio__period">2024.01 - 2024.04</div>
          <div className="portfolio__type">개인 프로젝트</div>
        </div>
        <div className="portfolio__main">
          <div className="portfolio__intro">
            서울 내의 공공 체육 시설을 보다 편하게 예약을 도와줄 수 있는 웹
            사이트를 구현했습니다.
          </div>
          <div className="portfolio__feature">
            <div className="portfolio__menu-title">주요 기능 및 특징</div>
            <div className="portfolio__feature-content">
              <div className="portfolio__feature-client">
                <div className="portfolio__menu-small-title">클라이언트</div>
                <div>
                  •빠른 개발 및 빌드 속도로 효율적인 웹 개발을 위해 Vite 사용
                </div>
                <div>
                  •accessToken 을 로컬스토리지에 저장하는 방식으로 로그인 구현
                </div>
                <div>
                  •로컬스토리지에 저장 되어 있는 Access Token을 request의 header
                  에 담아 서버에 요청 후 검증 하여 회원이 아닌 사용자의 사이트
                  접근을 방지 하기 위한 guard 구현
                </div>
                <div>
                  •recoil을 사용하여 글로벌 상태 관리를 단순화 하고 컴포넌트 간
                  데이터 흐름을 효율적으로 관리
                </div>
                <div>
                  •querystring을 이용하여 클라이언트와 서버 간 데이터를 전달을
                  가능하게 하고 동적 웹페이지를 구축 개발 서버와 배포 서버를
                  환경 분리 시켜 확장성 및 유지 보수에 용이하게 관리
                </div>
                <div>
                  •typeScript의 interface 를 사용하여 객체를 구조화 시켰고 타입
                  검사를 하게 하여 오류를 줄임
                </div>
                <div>
                  •Tailwind CSS를 이용하여 직관적인 코드를 작성하는 것과 더불어
                  커스터마이징을 하여 일관된 스타 일을 적용
                </div>
                <div>
                  •관점 지향 프로그래밍의 개념에 따라 template, layout, page
                  폴더 를 분리해 화면에서 표현되는 컴 포넌트들을 효율적으로 관리
                </div>
                <div>
                  •파일들을 모듈화 시켜 재사용에 용이하게 util 폴더를 만들어
                  관리
                </div>
                <div>
                  •자주 사용 되는 button 이나 input 을 컴포넌트화 하여
                  유지보수에 용이하게함
                </div>
              </div>
              <div className="portfolio__feature-back">
                <div className="portfolio__menu-small-title">백엔드</div>
                <div>AWS의 인프라를 이용한 서버 구축(ec2, s3, RDS)</div>
                <div>
                  route53을 이용하여 도메인을 등록하고 외부의 라우팅 연결
                </div>
                <div>
                  배포용 서버 관리(무중단, 에러 로그 확인)를 위해 pm2 사용
                </div>
                <div>
                  naver maps API의 https 프로토콜과 통신하기 위해 https 통신
                  지원이 되는 cloudfront 서버 이 용
                </div>
                <div>
                  api 들을 유지, 보수에 용이하게 해주는 node js 프레임워크인
                  nest.js 를 이용하여 백엔드 서버 구축 및 DB 구축
                </div>
                <div>사용자 인증을 하기 위한 middleware 구현</div>
                <div>
                  회원이 아닌 사용자의 특정 동작을 방지하기 위한 guard 구현
                </div>
                <div>
                  중요한 정보들을 외부에 노출되지 않게 config폴더를 만들어 관리.
                </div>
                <div>bcrypt를 이용한 패스워드 생성</div>
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
                <img src="/screenshot/playground/main.png" alt="" />
                <div className="portfolio__picture-ment">메인 화면</div>
              </div>
              <div className="portfolio__picture-img">
                <img src="/screenshot/playground/login.png" alt="" />
                <div className="portfolio__picture-ment">로그인</div>
              </div>
              <div className="portfolio__picture-img">
                <img src="/screenshot/playground/signup.png" alt="" />
                <div className="portfolio__picture-ment">회원 가입</div>
              </div>
              <div className="portfolio__picture-img">
                <img src="/screenshot/playground/detail.png" alt="" />
                <div className="portfolio__picture-ment">디테일 화면</div>
              </div>
              <div className="portfolio__picture-img">
                <img src="/screenshot/playground/reservation.png" alt="" />
                <div className="portfolio__picture-ment">예약 리스트</div>
              </div>
              <div className="portfolio__picture-img">
                <img src="/screenshot/playground/reserve.png" alt="" />
                <div className="portfolio__picture-ment">예약 화면</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaygroundPortfolio;
