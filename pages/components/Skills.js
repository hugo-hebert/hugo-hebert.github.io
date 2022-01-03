
const Skills = ({skills}) => {
   
  return (
    <div className="skills--wrapper">
      {skills.data.map( (skill, ix) => {
        return (
          <div key={ix}>
            {skill.attributes.description} | {skill.attributes.value}
          </div>
          )
      })}
    </div>
  )
};

export default Skills;