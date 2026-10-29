function Experience() {
    return (
        <div id="experience" className="container py-5">
            <div className="text-center">
                <i className="fa-solid fa-suitcase fs-1 experience"></i>
                <h1 className="fw-bolder text-60 mt-3">Experience</h1>
                <div className="edu-title-line"></div>
            </div>
            <div className="row justify-content-center px-2">
                <div className="card exp-card mt-5 px-0">
                    <div className="card-body">
                        <div className="d-flex gap-4 align-items-center border-bottom pb-3">
                            <div className="exp-box">
                                <img src="/ssoc.png" alt="ssoc logo" className="exp-img" />
                            </div>
                            <div>
                                <p className="exp-badge">OPEN SOURCE PROGRAM</p>
                                <h5 className="card-title mb-1">Open Source Contributor</h5>
                                <p className="card-text experience fw-semibold">Social Summer of Code (SSoC) 2026</p>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap gap-2 my-3">
                            <p className="exp-det-badge"><i className="fa-solid fa-calendar-days me-1"></i>Jun 2026 - Aug 2026</p>
                            <p className="exp-det-badge"><i className="fa-solid fa-location-dot me-1"></i>Remote</p>
                            <p className="exp-det-badge"><i className="fa-solid fa-code-branch me-1"></i>OPEN SOURCE</p>
                        </div>
                        <div>
                            <p className="exp-task fw-bold fs-5"><i className="fa-solid fa-list-check me-2"></i>What I Did</p>
                            <ul className="edu-subjects-list mb-0">
                                <li>Contributed to open-source projects by solving real-world GitHub issues</li>
                                <li>Raised and merged Pull Requests across multiple repositories</li>
                                <li>Collaborated with mentors and project admins during code reviews</li>
                                <li>Earned points on the SSoC leaderboard through active contributions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;