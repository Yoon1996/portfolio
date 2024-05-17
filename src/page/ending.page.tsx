import { useEffect, useRef, useState } from "react";
import "../style/ending.style.scss";
import TypeIt from "typeit-react";

const EndingPage = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [rr, setRr] = useState<boolean>(false);
  useEffect(() => {
    console.log(rr);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRr(true);
        } else {
          setRr(false);
        }
      });
    });
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [rr]);

  return (
    <>
      <div ref={targetRef} className="ending">
        {rr ? (
          <>
            <div className="ending__thanks">봐주셔서 감사합니다.</div>
            <div className="ending__ment">
              <TypeIt>
                좋은 퍼블리셔, 개발자가 되기 위해 매 순간 최선을 다하겠습니다.
              </TypeIt>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default EndingPage;
