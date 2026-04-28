import { skills } from "../../store/info";
import { skillsSection, skillsTitle, skillsGrid, skilledCard, skillIcon } from "./styles.module.css";
import { mySkills } from "../../store/mySkills";

function Skills() {
    return (
        <section id={skills.split("#")[1]} className={skillsSection}>
            <div className="container">
                <div className="text-center">
                    <h2 className={`sections-title ${skillsTitle}`}>
                        <i className="fa-solid fa-laptop-code me-2" /> 
                        Skills & <span>Abilities</span>
                    </h2>
                </div>

                <div className={`row g-4 ${skillsGrid}`}>
                    {mySkills.map((skill, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className={skilledCard}>
                                <i className={`${skill.icon} ${skillIcon}`} />
                                <h3>{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;