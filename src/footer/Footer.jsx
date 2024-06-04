import './footer.css'
function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Aashi Nagpal</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>
                <div className="footer__social">
                <a href="https://www.instagram.com/" className="home__social-icon" target="_blank">
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://www.github.com/" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://www.linkedin.com/" className="home__social-icon" target="_blank">
            <i className="uil uil-linkedin-alt"></i>
            </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer