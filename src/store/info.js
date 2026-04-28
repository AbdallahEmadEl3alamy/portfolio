import profileImage from "../assets/me.png";

// Navigations
export const main = "";
export const about = "#about";
export const skills = "#skills";
export const services = "#services";
export const projects = "#projects";
export const contact = "#contact";

// Personal Info
export const name = "Abdallah Emad Ragab";
export const age = () => {
        let today = new Date();
        let birth = new Date("2005-07-28");
        let age = today.getFullYear() - birth.getFullYear();
        let month = today.getMonth() - birth.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        age--;
        }
        return age;
}
export const email = "abdallahemad9876@gmail.com";
export const place = "Cairo - Egypt";
export const imageProfile = profileImage;

// Links
export const whatsapp = "https://wa.me/201142349280";
export const facebook = "https://www.facebook.com/profile.php?id=61577038830153";
export const linkedin = "https://www.linkedin.com/in/abdallah-emad-ragab-96b790297";
export const github = "https://github.com/AbdallahEmadEl3alamy";
export const youtube = "https://www.youtube.com/channel/UCAWrgTggm1SvtC3pVTINKGw";
export const submitKey = "edcfee69-4515-4e81-baa2-012956a043d1"; // Web3Forms Access Key