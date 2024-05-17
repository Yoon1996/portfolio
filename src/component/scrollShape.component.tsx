import "../style/scrollShape.style.scss";

interface IScrollProps {
  show: boolean;
}
const ScrollShapeComponent = ({ show }: IScrollProps) => {
  return (
    <>
      <div className={`scroll${show ? "__show" : ""}`}>
        <img src="/icon/vector.png" alt="" />
      </div>
    </>
  );
};

export default ScrollShapeComponent;
