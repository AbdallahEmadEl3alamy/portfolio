import { about, contact, main, name, projects, services, skills } from "../../store/info";
import { customHeader, headerLogo, navLinks } from "./styles.module.css";

function Header() {
    return (
        <>
            <header className={`${customHeader} navbar navbar-expand-lg`}>
                <div className="container-fluid">
                    <span className={`navbar-brand header-logo ${headerLogo}`}>{name.split(" ")[0]}</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 header-nav-links ${navLinks}`}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={main}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href={about}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href={skills}>Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href={services}>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href={projects}>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href={contact}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;