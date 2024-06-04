import './about.css';
import AboutImg from './../assets/profile2.jpeg';

import CV from './../assets/aashi_nagpal_cv_pdf.pdf';

function About() {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                
                <p className="about__description">
                As a sophomore, I have immersed myself in a diverse range of computer science courses, equipping myself with a solid foundation in object oriented programming, algorithms, and data structures. 
                I am proficient in languages such as C, C++, Python and R. I also have experience in full stack development using Javascript, React.js, Node.js and MongoDB. Whether it's developing efficient algorithms or creating innovative solutions, I am always eager to apply my technical skills to real-world challenges. 
                </p>
                <a download="" href={CV} className="button button--flex">Download Resume</a>
            </div>
        </div>
        
    </section>
  )
}

export default About