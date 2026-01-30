import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <h2>Projects</h2>
            <ul>
                {/* <li className="project">
                    <Link to="/project/Asset-Tracker"><h3>Asset Tracker</h3></Link>
                    <p>Asset tracking web application using React.js and Firebase</p>
                </li> */}
                <li className="project">
                    <Link to="/project/Incident-Reporting-System"><h3>Incident Reporting System</h3></Link> (Industry-Sponsored Project)
                    <p>Web-based incident reporting system built with Django, React, and PostgreSQL</p>
                </li>
                <li className="project">
                    <Link to="/project/MoodMate"><h3>MoodMate</h3></Link>
                    <p>AI-powered web app built with React and JavaScript using a Hugging Face LLM</p>
                </li>
                <li className="project">
                    <Link to="/project/pos-integrator"><h3>pos-integrator</h3></Link> (Industry-Sponsored Project)
                    <p>FastAPI service integrating third-party POS data into a PostgreSQL database</p>
                </li>
                <li className="project">
                    <Link to="/project/ReloCash"><h3>ReloCash</h3></Link>
                    <p>Full-stack marketplace application built with Node.js and AWS</p>
                </li>
                <li className="project">
                    <Link to="/project/Oishii-Ramen"><h3>Oishii Ramen</h3></Link>
                    <p>Java-based Ramen store management game</p>
                </li>
                {/* <li className="project">
                    <Link to="/project/Minutemon"><h3>Minutemon</h3></Link>
                    <p>Time management application</p>
                </li>
                <li className="project">
                    <Link to="/project/Kyoto-Adventure"><h3>Kyoto Adventure</h3></Link>
                    <p>Python-based Command line game of Kyoto</p>
                </li> */}
                <li className="project">
                    <Link to="/project/helper"><h3>helper</h3></Link>
                    <p>Mobile application to join a virtual wait list of the emergency room</p>
                </li>

            </ul>
        </div>
    );
}

export default Projects;