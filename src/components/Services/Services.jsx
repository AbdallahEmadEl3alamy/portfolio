import { services } from "../../store/info";
import { 
    servicesSection, servicesTitle, cardCollection, 
    serviceCard, serviceIcon, serviceTitleText 
} from "./styles.module.css";
import { myServices } from "../../store/myServices";

function Services() {
    return (
        <section id={services.split("#")[1]} className={servicesSection}>
            <div className="container">
                <div className="text-center mb-3">
                    <h2 className={`sections-title ${servicesTitle}`}>My <span>Services</span></h2>
                </div>
                
                <div className={cardCollection}>
                    {myServices.map((service, index) => (
                        <div key={index} className={serviceCard}>
                            <i className={`${service.icon} ${serviceIcon}`}></i>
                            <h5 className={serviceTitleText}>{service.title}</h5>
                            <p className="mb-0">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;