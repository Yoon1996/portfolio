import TitleComponent from "../component/title.component";
import "../style/career.style.scss";
const CareerPage = () => {
  return (
    <>
      <TitleComponent title="Career & Education"></TitleComponent>
      <div className="career">
        <div className="career__wrap">
          <div className="career__card">
            <div className="career__period">2019.04 - 2022.04</div>
            <div className="career__name">휘피 케이크</div>
            <div className="career__position">~ 사원, 매니저, 점장</div>
            <div className="career__works">
              <div className="career__work">
                • 주문제작 케이크 생산 및 디자인
              </div>
              <div className="career__work">• 매장 관리 및 직원 관리</div>
              <div className="career__work">
                • 소비자와의 카카오톡 플러스 친구를 통한 소통및 응대
              </div>
            </div>
            {/* <div className="career__show">자세히 보기</div> */}
          </div>
          <div className="career__card">
            <div className="career__period">2022.06 - 2022.12</div>
            <div className="career__name">인천 그린컴퓨터 아카데미</div>
            <div className="career__position">~ 사설 교육 (퍼블리셔) </div>
            <div className="career__works">
              <div className="career__work">
                • html, css, jquery, js, react 교육
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPage;
