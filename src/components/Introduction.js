import React from 'react';
import './Introduction.css';
// import box from '../assets/box.png';

const Introduction = () => {
    return (
        <div id="introduction" className="introduction">

            <h2>
                {/* <img src={box} alt="Box" className="box" /> */}
                It's-a Me, Misuzu!</h2>
            <ul>
                <li>Software Developer | BCIT CST Graduate (Cloud Computing)</li>
                <li>Based in Vancouver, BC, Canada</li>
                <li>Former Midwife in Japan (3 years of clinical experience)</li>
                <li>Strong in teamwork, problem-solving, and quick learning</li>
                <li>Multilingual: English, Japanese, Korean, Mandarin</li>
            </ul>
        </div>
    );
}

export default Introduction;