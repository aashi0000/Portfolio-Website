import { useState } from 'react'
import './projects.css'

function Projects() {
    const [togglestate,settogglestate]=useState(0);
    const toggletab = (index) =>{
        settogglestate(index);
    }
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">What all I've worked on</span>
        <div className="projects__container container grid">
            <div className="projects__content">
                <div>
                    <i className="uil uil-browser projects__icon"></i>
                    <h3 className="projects__title">Portfolio Website</h3>

                </div>
                <span className="projects__button" onClick={()=>toggletab(1)}>
                    View More 
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                </span>

                <div className={togglestate === 1 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i className="uil uil-times projects__modal-close" onClick={()=>toggletab(0)}></i>
                        <h3 className="projects__modal-title">Portfolio Website</h3>
                        <p className="projects__modal-description">This website itself. Made using html, css and react.js, it shows details about me, my skills, my projects, contact details, etc.</p>

                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-database projects__icon"></i>
                    <h3 className="projects__title">Employee Management System</h3>

                </div>
                <span className="projects__button" onClick={()=>toggletab(2)}>
                    View More 
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                </span>

                <div className={togglestate===2 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i className="uil uil-times projects__modal-close" onClick={()=>toggletab(0)}></i>
                        <h3 className="projects__modal-title">Employee Management System</h3>
                        <p className="projects__modal-description">Made using Python and MySQL, this provides an efficient way to organize employee and related information, as well as print out reports to analyze trends in the workforce</p>

                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-comparison projects__icon"></i>
                    <h3 className="projects__title">Price Comparison platform</h3>

                </div>
                <span className="projects__button" onClick={()=>toggletab(3)}>
                    View More 
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                </span>

                <div className={togglestate===3 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i className="uil uil-times projects__modal-close" onClick={()=>toggletab(0)}></i>
                        <h3 className="projects__modal-title">Price Comparison platform</h3>
                        <p className="projects__modal-description">Made using MERN, it gathers prices of a single product across various ecommerce websites and allows the user to pick the best one based on customer reviews and other filters.</p>

                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-map projects__icon"></i>
                    <h3 className="projects__title">Soil Mapping in R</h3>

                </div>
                <span className="projects__button" onClick={()=>toggletab(4)}>
                    View More 
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                </span>

                <div className={togglestate===4 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i className="uil uil-times projects__modal-close" onClick={()=>toggletab(0)}></i>
                        <h3 className="projects__modal-title">Soil Mapping in R</h3>
                        <p className="projects__modal-description">Digital Soil Mapping using the language R and various Machine Learning models for resarch</p>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects