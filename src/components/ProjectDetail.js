import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";
import assettTracker1 from "../assets/asset-tracker/Asset-tracker-data-table.png";
import assettTracker2 from "../assets/asset-tracker/Asset-tracker-graph.png";
import oishiiRamen1 from "../assets/oishii-ramen/oishii-ramen-top.png";
import minutemon1 from "../assets/minutemon/daily-goals-screenshot.png";
import minutemon2 from "../assets/minutemon/timer-screenshot.png";
import kyotoAdventure1 from "../assets/kyoto-adventure/kyoto-adventure1.png";

const project = [
    {
        paramName: "Asset-Tracker",
        projectName: "Asset Tracker",
        time: "September 2024 - October 2024",
        description: [
            "Developed an asset tracking web application using React.js and Firebase to manage and visualize multiple accounts with real-time data retrieval and updates.",
            "Implemented account-specific data filtering, dynamic price updates, and graphical visualizations using plotly.js to enhance user experience.",
        ],
        gitHubLink: "https://github.com/Miryeong1235/asset-tracker",
        appLink: "https://asset-tracker-130f8.web.app/",
        images: [
            assettTracker1,
            assettTracker2,
        ]
    },
    {
        paramName: "Oishii-Ramen",
        projectName: "Oishii Ramen",
        time: "March 2024 - April 2024",
        description: [
            "Developed a Java-based Ramen store management game in collaboration with a partner, utilizing JavaFX for the interface design.",
            "Applied OOP concepts such as polymorphism, inheritance, encapsulation, and abstraction to enhance software design and functionality.",
            "Created and executed 127 JUnit tests to ensure code reliability and robust functionality.",
        ],
        gitHubLink: "https://github.com/Miryeong1235/COMP-2522-Oishii-Ramen",
        images: [
            oishiiRamen1,
        ]
    },
    {
        paramName: "Minutemon",
        projectName: "Minutemon",
        time: "March 2024 - March 2024",
        description: [
            "Created mobile-based time-budgeting application with React and CSS at QDS Hacks, recognized as finalist among 30 teams.",
            "Organized and guided team, ensuring progress and implementing effective time management strategies.",
        ],
        gitHubLink: "https://github.com/Miryeong1235/QDSteam24-Minitemon",
        demoLink: "https://www.youtube.com/watch?v=I5fDVeKR0mM",
        images: [
            minutemon1,
            minutemon2,
        ]
    },
    {
        paramName: "Kyoto-Adventure",
        projectName: "Kyoto Adventure",
        time: "November 2023 - December 2023",
        description: [
            "Built Python-based command-line game and conducted 20+ unit tests to ensure functionality and reduce bugs.",
            "Engaged in collaborative pair programming sessions, actively contributing to code review processes to enhance game logic and design for superior user experience, ensuring development of clean and efficient code.",
        ],
        gitHubLink: "",
        images: [
            kyotoAdventure1,
        ],
    },
    {
        paramName: "helper",
        projectName: "helper",
        time: "September 2023 - December 2023",
        description: [
            "Developed mobile app using HTML, CSS, and JavaScript to help users locate emergency rooms, join virtual wait list.",
            "Utilized Firebase for efficient data storage, enabling seamless user experiences in storing and retrieving information.",
            "Led team project, overseeing development lifecycle from planning to user testing for application.",
        ],
        gitHubLink: "https://github.com/Miryeong1235/DTC06-helpER",
        appLink: "https://helper-ccbc4.web.app/",
        images: [
        ],
    },

];

function ProjectDetail() {
    const { name } = useParams();
    const projectDetail = project.find((p) => p.paramName === name);

    const [selectedImage, setSelectedImage] = useState(null);

    if (!projectDetail) {
        return <h2 className="not-found">Project not found</h2>;
    }

    return (
        <div className="project-detail">
            <div className="project-info">
                <h2>{projectDetail.projectName}</h2>
                <p className="project-time">{projectDetail.time}</p>
                <ul className="project-description">
                    {projectDetail.description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>

                <a href={projectDetail.gitHubLink} target="_blank" rel="noreferrer" className="project-link">
                    GitHub Repository
                </a>
                {projectDetail.appLink && (
                    <a href={projectDetail.appLink} target="_blank" rel="noreferrer" className="project-link">
                        Application Link
                    </a>
                )}
                {projectDetail.demoLink && (
                    <a href={projectDetail.demoLink} target="_blank" rel="noreferrer" className="project-link">
                        Youtube Demo
                    </a>
                )}
            </div>

            {projectDetail.images.length > 0 && (
                <div className="project-images">
                    {projectDetail.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${projectDetail.projectName} screenshot ${index + 1}`}
                            className="project-image"
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
            )}

            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Expanded view" className="modal-image" />
                </div>
            )}
        </div>
    );
}

export default ProjectDetail;
