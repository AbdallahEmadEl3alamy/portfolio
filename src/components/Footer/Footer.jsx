import { name, about, contact, main, projects, skills, github, linkedin, facebook, whatsapp } from "../../store/info";
import { 
    footer, footerBrand, footerDesc, footerTitle, 
    footerLinks, socialIcons, bottomBar, heartIcon 
} from "./styles.module.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={footer}>
            <div className="container">
                <div className="row g-4">
                    {/* Column 1: Brand & Bio */}
                    <div className="col-lg-4 col-md-6">
                        <a href={main} className={footerBrand}>{name}</a>
                        <p className={footerDesc}>
                            Front-end developer focused on building beautiful and functional user interfaces. Let's create something amazing together.
                        </p>
                        <div className={socialIcons}>
                            <a href={github} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                            <a href={linkedin} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                            <a href={facebook} target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                            <a href={whatsapp} target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-lg-4 col-md-6">
                        <h4 className={footerTitle}>Quick Links</h4>
                        <ul className={footerLinks}>
                            <li><a href={main}>Home</a></li>
                            <li><a href={about}>About Me</a></li>
                            <li><a href={skills}>Skills</a></li>
                            <li><a href={projects}>My Projects</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="col-lg-4 col-md-12">
                        <h4 className={footerTitle}>Get In Touch</h4>
                        <ul className={footerLinks}>
                            <li><a href={`mailto:${contact}`}>Contact Me</a></li>
                            <li><p className="mb-0 text-secondary">Based in Egypt</p></li>
                            <li><p className="mb-0 text-secondary">Open for Freelance & Full-time</p></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={bottomBar}>
                <div className="container">
                    <p className="mb-0">
                        &copy; {currentYear} | Designed & Built with <i className={`fa-solid fa-heart ${heartIcon}`}></i> by <b>{name}</b>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;