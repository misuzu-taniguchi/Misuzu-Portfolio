import React from "react";
import "./Contact.css";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div className="linked-in">
                <SocialIcon url="https://www.linkedin.com/in/misuzu-taniguchi/" />
            </div>
            <div className="github">
                <SocialIcon url="https://github.com/misuzu-taniguchi" />
            </div>
            <div className="email">
                <SocialIcon url="mailto:mtaniguchi3@my.bcit.ca" />
            </div>
        </div>
    );
}

export default Contact;
