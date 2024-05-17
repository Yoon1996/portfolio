import "../style/title.style.scss";
interface ITitleProps {
  title: string;
}
const TitleComponent = ({ title }: ITitleProps) => {
  return (
    <>
      <div className="title">{title}</div>
    </>
  );
};

export default TitleComponent;
