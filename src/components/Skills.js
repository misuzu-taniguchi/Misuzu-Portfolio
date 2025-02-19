import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h2>Skills</h2>
            <ul>
                <li className="skill">
                    <h3>Programming Languages</h3>
                    <p>Python, Java, C, Kotlin, R, JavaScript, HTML, CSS</p>
                </li>
                <li className="skill">
                    <h3>Frameworks</h3>
                    <p>React.js, Node.js, Express.js, Pygame, JavaFX, Bootstrap, Firebase, MongoDB, MySQL</p>
                </li>
                <li className="skill">
                    <h3>Tools</h3>
                    <p>Git, Visual Studio Code, Cloudflare, Figma, Trello, PyCharm, IntelliJ IDEA, CLion, Android Studio, RStudio</p>
                </li>
                <li className="skill">
                    <h3>Certification</h3>
                    <p>AWS Certified Cloud Practitioner (2024)</p>
                </li>
            </ul>
        </div>
    );
}

export default Skills;