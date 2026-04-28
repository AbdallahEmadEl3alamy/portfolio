// Links
import { whatsapp, facebook, linkedin, github, main, projects, name, imageProfile } from "../../store/info.js";
import { bgMain, mainSection, mainTextWrapper, mainIntroSpan, mainTitle, mainSubtitle, 
    mainSocialLinks, mainAvatar, btnSuccess } from "./styles.module.css";

function Main() {
    return (
        <div className={bgMain}>
            <section id={main.split("#")[1]} className={`container ${mainSection}`}>
                <div className={mainTextWrapper}>
                    <p><span className={mainIntroSpan}>Hi there, I'm</span></p>
                    <h1 className={mainTitle}>{name}</h1>
                    <p className={mainSubtitle}>Front-end developer</p>
                    <div className={mainSocialLinks}>
                        <a target="_blank" href={whatsapp}><i className="fa-brands fa-square-whatsapp" /></a>
                        <a target="_blank" href={facebook}><i className="fa-brands fa-facebook" /></a>
                        <a target="_blank" href={linkedin}><i className="fa-brands fa-linkedin" /></a>
                        <a target="_blank" href={github}><i className="fa-brands fa-github" /></a>
                        {/* <a target="_blank" href={youtube}><i className="fa-brands fa-youtube" /></a> */}
                    </div>
                    <a href={projects} className={`btn btn-success ${btnSuccess}`}>My Work <i className="fa-solid fa-circle-arrow-down" /></a>
                </div>
                <div id="main-img">
                    <img src={imageProfile} className={mainAvatar} alt="me" />
                </div>
            </section>
        </div>
    )
}

export default Main;