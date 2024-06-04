import './education.css'

function Education() {
  return (
    /*<section className="services section" id="services">
        <h2 className="section__title">Education</h2>
        <span className="section__subtitle"></span>

        <div className="education__container container">
            <div className="education__sections">
                <div className="education__content">
                    <div className="education__data">
                        <h3 className="education__title">B.E. CSE (Ongoing)</h3>
                        <span className="education__subtitle">Thapar Institute of Engineering and Technology, Patiala</span>
                        <div className="education__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2022 - Present
                        </div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>

                    <div className="education__data">
                        <h3 className="education__title">Senior Secondary Schooling</h3>
                        <span className="education__subtitle">Gurukul Global School, Chandigrh</span>
                        <div className="education__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2016-2022
                        </div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>

                    <div className="education__data">
                        <h3 className="education__title">Earlier Schooling</h3>
                        <span className="education__subtitle">Loreto Convent School, Delhi</span>
                        <div className="education__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2010-2016
                        </div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    */
<section className="education section" id="education">
    <h2 className="section__title">Education</h2>
    <span className="section__subtitle">Educational Qualifications up till date</span>
    
    <div className="timeline">
        <div className="dibba left">
            <div className="content">
                <h2 className='education__title'>B.E. CSE (Ongoing)</h2>
                <p className='education__subtitle'>Thapar Institute of Engineering and Technology, Patiala</p>
                <div className="education__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2022 - Present
                </div>
            </div>
        </div>
        <div className="dibba right">
            <div className="content">
                <h2 className='education__title'>Senior Secondary Schooling</h2>
                <p className='education__subtitle'>Gurukul Global School, Chandigarh</p>
                <div className="education__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2016 - 2022
                </div>
            </div>
        </div>
        <div className="dibba left" id='end-dibba'>
            <div className="content">
                <h2 className='education__title'>Earlier Schooling</h2>
                <p className='education__subtitle'>Loreto Convent School, Delhi</p>
                <div className="education__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2010 - 2016
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Education