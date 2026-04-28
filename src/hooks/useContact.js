import { useState } from "react";

function useContact() {
    const [contactAlert, setContactAlert] = useState({ text: "", type: "" });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setContactAlert({ text: "Sending...", type: "success" });

        const formData = new FormData(event.target);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setContactAlert({ text: "Message sent successfully! ✅", type: "success" });
                event.target.reset();
            } else {
                setContactAlert({ text: "Failed to send message. ❌", type: "error" });
            }
        } catch (error) {
            setContactAlert({ text: "Something went wrong! ⚠️", type: "error" });
            console.error(error);
        } finally {
            setTimeout(() => setContactAlert({ text: "", type: "" }), 2000);
        }
    };

    return { contactAlert, handleSubmit };
}

export default useContact;