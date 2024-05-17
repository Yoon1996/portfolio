import "../style/skills.style.scss";

interface ISkillsProps {
  skill: string;
}
const SkillsComponent = ({ skill }: ISkillsProps) => {
  return (
    <>
      <div className="skills">
        <img className="skills__img" src={`/skills/${skill}.png`} alt="" />
      </div>
    </>
  );
};

export default SkillsComponent;
