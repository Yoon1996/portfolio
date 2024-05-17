import "../style/years.style.scss";

interface IYearsProps {
  selectFilter: (year: string) => void;
}
const YearsComponent = ({ selectFilter }: IYearsProps) => {
  const years = ["All", "2022", "2023", "2024"];
  return (
    <>
      <div className="years">
        {years.map((year, index) => (
          <div
            onClick={() => selectFilter(year)}
            className="years__menu"
            key={index}
          >
            {year}
          </div>
        ))}
      </div>
    </>
  );
};

export default YearsComponent;
