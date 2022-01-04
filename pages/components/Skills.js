
import { motion } from "framer-motion";

const skillMeter = (skill, ix) => {
  const percentage = (skill.attributes.value / 10) * 100 + '%';
  const color = "#" + skill.attributes.color;
  const colorTransparent = color + "50"

  const variants = {
    start: {
      width: "5%",
    },
    finish: {
      width: percentage,
      transition: {
        delay: (ix + 1) * 0.5,
      } 
    },
    finishText: {
      width: "100%",
      transition: {
        delay: (ix + 1) * 0.5,
      } 
    },
  };

  return (
    <div key={ix} className="skills--skill-meter" style={{backgroundColor: colorTransparent}}>
      <motion.span className="skills--skill-meter--fill" 
        style={{backgroundColor: color}}
        variants={variants}
        initial="start"
        animate="finish"></motion.span>
      <motion.span className="skills--skill-meter--description"
        variants={variants}
        initial="start"
        animate="finishText">{skill.attributes.description}</motion.span>
    </div>
  );
};


const Skills = ({skills}) => {
  return (
    <div className="skills">
      <h3 className="skills--title">Skills</h3>
      {skills.data.map( (skill, ix) => {
        return ( skillMeter(skill, ix) )
      })}
    </div>
  )
};

export default Skills;