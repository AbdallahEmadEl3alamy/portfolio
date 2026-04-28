import { about, age, email, name, place } from "../../store/info";
import { aboutSection, aboutTitle, mainHeading, highlight, aboutEducationTitle, disabledInLg } from "./styles.module.css";

function About() {
    return (
        <section id={about.split("#")[1]} className={`container ${aboutSection}`}>
            <div className="text-center mb-3">
                <h2 className={`sections-title ${aboutTitle}`}>About Me</h2>
            </div>
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <h3 className={mainHeading}>I'm <span className={highlight}>{name},</span> a web developer</h3>
                    <p>I'm a front-end developer experienced in HTML, CSS, JavaScript, Bootstrap and React. <br />
                        I focus on creating responsive layouts, interactive designs, and smooth user experiences that make websites both functional and attractive.</p>
                    <h4 className={aboutEducationTitle}>Education</h4>
                    <p>Faculty of Computers and Information, Beni-Suef University (2023 – 2027)</p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <hr className={disabledInLg} />
                    <p><b>Age</b> : {age()}</p>
                    <hr />
                    <p><b>Email</b> : {email}</p>
                    <hr />
                    <p><b>Place</b> : {place}</p>
                    <hr />
                </div>
            </div>
        </section>
    )
}

export default About;