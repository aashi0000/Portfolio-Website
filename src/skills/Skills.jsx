import React from 'react'
import Webdev from './Webdev.jsx'
import Ml from './Ml.jsx'
import Languages from './Languages.jsx'
import Coursework from './Coursework.jsx'
import Database from './Database.jsx'
import './skills.css'
function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
        <div className="skills__container container grid">
            <Coursework/>
            <Languages/>
            <Webdev/>
            <Database/>
            <Ml/>
        </div>
    </section> 
  )
}

export default Skills