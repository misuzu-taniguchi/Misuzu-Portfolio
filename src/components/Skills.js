import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h2>Skills</h2>
            <ul>
                <li className="skill">
                    <h3>Programming Languages</h3>
                    <p>Python, JavaScript, Java, Kotlin, C, HTML, CSS, R</p>
                </li>
                <li className="skill">
                    <h3>Frameworks</h3>
                    <p>Django, Node.js, React, FastAPI, Bootstrap, JavaFX</p>
                </li>
                <li className="skill">
                    <h3>Databases</h3>
                    <p>DynamoDB, Firebase, MongoDB, MySQL, PostgreSQL</p>
                </li>
                <li className="skill">
                    <h3>Certification</h3>
                    <p>AWS Certified Solutions Architect - Associate (July 2025)</p>
                </li>
                <li className="skill">
                    <h3>Cloud & Tools</h3>
                    <p>AWS(EC2, S3, IAM, Cognito, Lambda, SNS), Docker, Git, Linux</p>
                </li>
            </ul>
        </div>
    );
}

export default Skills;