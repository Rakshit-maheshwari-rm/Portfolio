function About() {
    return (
        <div id="about" className="container-lg py-4 py-md-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-5 text-center text-lg-start mt-4 mt-md-5 mb-0 position-relative order-2 order-md-1">
                    <img src="/profile2.png" alt="about-me" className="profile-img-2 rounded-5" />
                </div>
                <div className="col-12 col-md-7 my-sm-4 my-md-0 order-1 order-md-2">
                    <h1 className="fw-bolder text-60 mb-2 about-head">About Me</h1>
                    <p className="opacity-75">I'm a passionate full-stack developer who loves building modern, scalable, and user-friendly web applications. I enjoy turning complex problem statements into clean, real-world digital solutions.</p>
                    <p className="opacity-75">With a strong problem-solving mindset and a detail-oriented approach to software architecture, I focus on clean code, responsive design, and robust API development.</p>

                    <div className="d-flex flex-wrap gap-2 my-3 pb-1">
                        <span className="competency-badge"><i className="fa-solid fa-layer-group me-1"></i>Full-Stack MERN</span>
                        <span className="competency-badge"><i className="fa-solid fa-server me-1"></i>RESTful API Design</span>
                        <span className="competency-badge"><i className="fa-solid fa-database me-1"></i>Database Architecture</span>
                        <span className="competency-badge"><i className="fa-solid fa-code-branch me-1"></i>Open Source Contributor</span>
                    </div>

                    <div className="d-flex gap-2 mt-3">
                        <div className="details-box"><i className="fa-solid fa-envelope"></i></div>
                        <div>
                            <p className="mb-0">Email</p>
                            <a href="mailto:rakshit4713@gmail.com" className="mb-0 opacity-75 text-decoration-none text-white">rakshit4713@gmail.com</a>
                        </div>
                    </div>
                    <div className="border-bottom w-75 my-3"></div>
                    <div className="d-flex gap-2">
                        <div className="details-box"><i className="fa-solid fa-location-dot"></i></div>
                        <div>
                            <p className="mb-0">Location</p>
                            <p className="mb-0 opacity-75">Bhilwara, Rajasthan, India</p>
                        </div>
                    </div>
                    <div className="border-bottom w-75 my-3"></div>
                    <div className="d-flex gap-2">
                        <div className="details-box"><i className="fa-regular fa-clock"></i></div>
                        <div>
                            <p className="mb-0">Availability</p>
                            <p className="mb-0 opacity-75">Available for freelance & full-time opportunities</p>
                        </div>
                    </div>
                    <div className="border-bottom w-75 my-3"></div>
                    <div className="d-flex gap-3">
                        <div className="details-box">
                            <a href="https://github.com/Rakshit-maheshwari-rm" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <i className="fa-brands fa-github text-white"></i>
                            </a>
                        </div>
                        <div className="details-box">
                            <a href="https://www.linkedin.com/in/contact-rakshit-maheshwari" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <i className="fa-brands fa-linkedin text-white"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
