import { useEffect, useState } from "react";
import "../style/intro.style.scss";
import ScrollShapeComponent from "../component/scrollShape.component";
const IntroPage = () => {
  useEffect(() => {
    showHello();
    setTimeout(() => {
      showTitle();
      showMent();
      showArrow();
    }, 100);
  }, []);
  const [wholeShow, setWholeShow] = useState<boolean>(false);
  const [helloStyle, setHelloStyle] = useState<boolean>(false);
  const [titleStyle, setTitleStyle] = useState<boolean>(false);
  const [mentStyle, setMentStyle] = useState<boolean>(false);
  const [arrowStyle, setArrowStyle] = useState<boolean>(false);
  //intro__hello 애니메이션
  const showHello = async () => {
    setHelloStyle(true);
    setTimeout(() => {
      setHelloStyle(false);
    }, 2000);
    setTimeout(() => {
      setWholeShow(true);
    }, 3000);
  };
  //intro__title 애니메이션
  const showTitle = () => {
    setTimeout(() => {
      setTitleStyle(true);
    }, 3000);
  };

  //intro__ment 애니메이션
  const showMent = () => {
    setTimeout(() => {
      setMentStyle(true);
    }, 4000);
  };

  //arrow 애니메이션 보여주기
  const showArrow = () => {
    setTimeout(() => {
      setArrowStyle(true);
    }, 5000);
  };
  return (
    <>
      <div className="intro">
        <div className={`intro__hello${helloStyle ? "__show" : ""}`}>
          안녕하십니까?
        </div>
        {wholeShow ? (
          <>
            <div
              className={`intro__title${titleStyle ? "__show" : ""}`}
              // className="intro__title"
            >
              프론트엔드 개발자 <span className="strong">윤성준</span> 입니다.
            </div>
            <div className="intro__ment-wrap">
              <div className={`intro__ment${mentStyle ? "__show" : ""}`}>
                <span className="strong">'저는'</span>
              </div>
              <div className={`intro__ment${mentStyle ? "__show" : ""}`}>
                <span className="strong">'꼼꼼함'</span> 으로 사용자에게 믿음을
                주고
              </div>
              <div className={`intro__ment${mentStyle ? "__show" : ""}`}>
                <span className="strong">'책임감'</span> 으로 회사에 도움이 될
                수 있는 개발자 입니다.
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <ScrollShapeComponent show={arrowStyle}></ScrollShapeComponent>
    </>
  );
};

export default IntroPage;
