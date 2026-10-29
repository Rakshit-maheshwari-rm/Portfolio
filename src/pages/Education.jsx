function Education() {
    return (
        <div id="education" className="container py-5">
            <div className="text-center">
                <i className="fa-solid fa-graduation-cap fs-1 education"></i>
                <h1 className="fw-bolder text-60 mt-3">Education</h1>
                <div className="edu-title-line"></div>
            </div>
            <div className="row mt-5 g-4 justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column">
                            <div className="edu-box"><img src="/collegelogo.png" alt="college logo" className="edu-img" /></div>
                            <h5 className="card-title mt-3">Maharshi Dayanand Saraswati University, Ajmer, Rajasthan</h5>
                            <h6 className="card-subtitle mb-2 education my-2">Bachelor of Computer Applications (BCA)</h6>
                            <p className="opacity-75 mb-0"><i className="fa-solid fa-calendar-days me-1"></i>2024 - 2027</p>
                            <hr className="edu-card-divider" />
                            <p className="edu-subjects-label mb-2">
                                <i className="fa-solid fa-book-open me-2 edu-i fs-5"></i>Core CS Coursework
                            </p>
                            <ul className="edu-subjects-list mb-0 mt-auto">
                                <li>Data Structures Using C++</li>
                                <li>Programming in Python</li>
                                <li>Database Technology (SQL)</li>
                                <li>Operating Systems</li>
                                <li>Artificial Intelligence</li>
                                <li>Cloud Computing</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column">
                            <div className="edu-box"><img src="/schoollogo.png" alt="school logo" className="edu-img" /></div>
                            <h5 className="card-title mt-3">Central Academy Senior Secondary School, Bhilwara, Rajasthan</h5>
                            <h6 className="card-subtitle mb-2 education my-2">Senior Secondary (12th Grade)</h6>
                            <p className="opacity-75 mb-0"><i className="fa-solid fa-calendar-days me-1"></i>2024 &nbsp;|&nbsp; <i className="fa-regular fa-star me-1"></i>90.2%</p>
                            <hr className="edu-card-divider" />
                            <p className="edu-subjects-label mb-2">
                                <i className="fa-solid fa-award me-2 edu-i fs-5"></i>Academic Highlights
                            </p>
                            <ul className="edu-subjects-list mb-0">
                                <li>Graduated with Distinction (90.2%)</li>
                                <li>Focus in Informatics Practices</li>
                                <li>Central Board of Secondary Education (CBSE)</li>
                                <li>Bhilwara, Rajasthan</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column">
                            <div className="edu-box"><img src="/schoollogo.png" alt="school logo" className="edu-img" /></div>
                            <h5 className="card-title mt-3">Central Academy Senior Secondary School, Bhilwara, Rajasthan</h5>
                            <h6 className="card-subtitle mb-2 education my-2">Secondary School (10th Grade)</h6>
                            <p className="opacity-75 mb-0"><i className="fa-solid fa-calendar-days me-1"></i>2022 &nbsp;|&nbsp; <i className="fa-regular fa-star me-1"></i>88.2%</p>
                            <hr className="edu-card-divider" />
                            <p className="edu-subjects-label mb-2">
                                <i className="fa-solid fa-award me-2 edu-i fs-5"></i>Academic Highlights
                            </p>
                            <ul className="edu-subjects-list mb-0">
                                <li>Graduated with Distinction (88.2%)</li>
                                <li>Foundation in Information Technology</li>
                                <li>Central Board of Secondary Education (CBSE)</li>
                                <li>Bhilwara, Rajasthan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
