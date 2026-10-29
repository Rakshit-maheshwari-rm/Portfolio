function Footer() {
    return (
        <footer className="portfolio-footer pt-5 mt-5">
            <div className="container">
                <div className="row g-4 justify-content-between">
                    <div className="col-12 col-md-6 col-lg-4">
                        <h4 className="fw-bold text-white mb-3">
                            <span className="title-text me-2">&lt;/&gt;</span>Rakshit.dev
                        </h4>
                        <p className="opacity-75 mb-4 text-14">
                            Building digital experiences that matter. Passionate about scalable, modern, and high-performance applications.
                        </p>
                        <div className="d-flex gap-2">
                            <a href="https://github.com/Rakshit-maheshwari-rm" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="GitHub">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/contact-rakshit-maheshwari" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-lg-2">
                        <h5 className="fw-bold text-white mb-3">Quick Links</h5>
                        <ul className="footer-list">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 col-lg-3">
                        <h5 className="fw-bold text-white mb-3">Core Stack</h5>
                        <ul className="footer-list">
                            <li><a href="#skills">React.js & Node.js</a></li>
                            <li><a href="#skills">Express.js & MongoDB</a></li>
                            <li><a href="#skills">RESTful API Architecture</a></li>
                            <li><a href="#skills">Tailwind CSS & Bootstrap</a></li>
                            <li><a href="#skills">Git & Open Source</a></li>
                            <li><a href="#skills">Postman & Cloud Tools</a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <h5 className="fw-bold text-white mb-3">Contact Info</h5>
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="footer-contact-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <a href="mailto:rakshit4713@gmail.com" className="text-14 opacity-75 text-decoration-none text-white">
                                rakshit4713@gmail.com
                            </a>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="footer-contact-icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <span className="text-14 opacity-75">Bhilwara, Rajasthan, India</span>
                        </div>
                    </div>
                </div>

                <div className="border-top border-secondary border-opacity-25 mt-4 pt-4 pb-2 text-center">
                    <p className="opacity-50 text-14 mb-0">
                        {new Date().getFullYear()} • Rakshit Maheshwari
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
