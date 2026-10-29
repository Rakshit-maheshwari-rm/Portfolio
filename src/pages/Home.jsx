function Home() {
    return (
        <div id="home" className="container-lg my-5 my-sm-2 px-3 px-sm-4">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center mt-3 mt-md-0 text-md-start order-2 order-md-1">
                    <div className="d-inline-flex align-items-center gap-2 status-pill px-3 py-1 rounded-pill mb-3">
                        <span className="status-dot"></span>
                        <span className="status-text fw-medium">Available for Opportunities & Internships</span>
                    </div>
                    <h1 className="fw-bolder text-white text-60 mb-2">Hi, I'm Rakshit Maheshwari</h1>
                    <h2 className="fw-bold sub-head mb-4">Full Stack Developer</h2>
                    <p className="text-18 mb-4">I build scalable, high-performance web applications <br className="d-none d-xl-inline" /> using modern technologies and clean code.</p>
                    <div className="d-flex flex-wrap gap-2 gap-sm-3 mt-4 pt-1 justify-content-center justify-content-md-start">
                        <a href="#projects" className="btn prop px-3 py-2 py-sm-3 rounded-pill fw-medium text-18 text-decoration-none">
                            <i className="fa-solid fa-paper-plane me-2"></i>View Projects
                        </a>
                        <a href="/Resume.pdf" download="Rakshit_Maheshwari_Resume.pdf" rel="noopener noreferrer" target="_blank" className="btn btn-resume px-3 py-2 py-sm-3 rounded-pill fw-medium text-18 text-decoration-none">
                            <i className="fa-solid fa-download me-2"></i>Download Resume
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 my-4 py-sm-3 d-flex justify-content-center order-1 order-md-2">
                    <div className="avatar-container">
                        <img src="/profile.png" alt="profile-image" className="profile-img" />
                    </div>
                </div>
            </div>

            <div className="hero-metrics-bar row g-3 mt-4 mt-lg-5 pt-2">
                <div className="col-6 col-lg-3">
                    <div className="metric-card text-center p-3 rounded-4 h-100">
                        <h3 className="metric-number fw-bold mb-1">5+</h3>
                        <p className="metric-label opacity-75 mb-0 text-14">Full Stack & Web Apps</p>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="metric-card text-center p-3 rounded-4 h-100">
                        <h3 className="metric-number fw-bold mb-1">SSoC '26</h3>
                        <p className="metric-label opacity-75 mb-0 text-14">Open Source Contributor</p>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="metric-card text-center p-3 rounded-4 h-100">
                        <h3 className="metric-number fw-bold mb-1">25+</h3>
                        <p className="metric-label opacity-75 mb-0 text-14">Git Commits & PRs</p>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="metric-card text-center p-3 rounded-4 h-100">
                        <h3 className="metric-number fw-bold mb-1">MERN</h3>
                        <p className="metric-label opacity-75 mb-0 text-14">Core Tech Stack</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
