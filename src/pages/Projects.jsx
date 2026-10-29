import { useState } from "react";

const initialProjects = [
    {
        id: 1,
        title: "BookEase",
        image: "/projects/bookease.png",
        badges: ["Full Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Razorpay"],
        category: ["React", "Node.js", "Full Stack"],
        description: "Full-stack rental property booking platform featuring secure JWT authentication, role-based authorization, dynamic room pricing, Cloudinary asset pipelines, and seamless Razorpay payment gateway integration.",
        demoPill: "1-Click Demo Login Available on Site",
        githubUrl: "https://github.com/Rakshit-maheshwari-rm/BookEase",
        liveDemoUrl: "https://bookease-omur.onrender.com"
    },
    {
        id: 2,
        title: "Stock Trading",
        image: "/projects/stock-trading.png",
        badges: ["Full Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
        category: ["React", "Node.js", "Full Stack"],
        description: "Stock trading simulation platform offering interactive market data visualization, order execution workflows, virtual portfolio balance tracking, and responsive financial analytics.",
        githubUrl: "https://github.com/Rakshit-maheshwari-rm/stock-trading",
        liveDemoUrl: "https://stock-trading-fava.onrender.com"
    },
    {
        id: 3,
        title: "Movie Search",
        image: "/projects/movie-search.png",
        badges: ["JavaScript", "REST APIs", "Bootstrap 5", "Async/Await"],
        category: ["Frontend", "JavaScript", "Bootstrap"],
        description: "Responsive movie discovery web app integrating live external cinema REST APIs with asynchronous search queries, dynamic poster rendering, cast details, and rating filters.",
        githubUrl: "https://github.com/Rakshit-maheshwari-rm/movie-search",
        liveDemoUrl: ""
    },
    {
        id: 4,
        title: "School Landing Page",
        image: "/projects/school-landing.png",
        badges: ["HTML5", "Tailwind CSS", "Mobile-First", "Responsive"],
        category: ["Frontend", "Tailwind CSS"],
        description: "Modern, high-conversion educational institution landing page built with mobile-first Tailwind design patterns, smooth navigation, accessible sections, and clean typography.",
        githubUrl: "https://github.com/Rakshit-maheshwari-rm/school-landing-page",
        liveDemoUrl: ""
    },
    {
        id: 5,
        title: "Shopping Landing Page",
        image: "/projects/shopping-landing.png",
        badges: ["HTML5", "CSS3", "Bootstrap 5", "E-Commerce"],
        category: ["Frontend", "Bootstrap"],
        description: "Clean e-commerce landing experience featuring product promotion showcases, responsive catalog grids, interactive promotional elements, and modern retail UI layouts.",
        githubUrl: "https://github.com/Rakshit-maheshwari-rm/shopping-landing-page",
        liveDemoUrl: ""
    }
];

const categories = ["All", "Full Stack", "React.js", "Node.js", "Tailwind CSS", "Bootstrap"];

function Projects() {
    const [projects] = useState(initialProjects);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter((project) => {
            if (Array.isArray(project.category)) {
                if (project.category.some(c => c.toLowerCase() === activeCategory.toLowerCase())) {
                    return true;
                }
            } else if (typeof project.category === "string" && project.category.toLowerCase() === activeCategory.toLowerCase()) {
                return true;
            }
            if (Array.isArray(project.badges)) {
                const normFilter = activeCategory.toLowerCase().replace(/[\s\-_.]/g, "");
                return project.badges.some(b => {
                    const normBadge = b.toLowerCase().replace(/[\s\-_.]/g, "");
                    return normBadge.includes(normFilter);
                });
            }
            return false;
        });

    return (
        <div id="projects" className="container py-5">
            <div className="text-center">
                <h1 className="fw-bolder text-60 mt-3">My <span className="text-sub">Projects</span></h1>
                <div className="edu-title-line"></div>
                <p className="opacity-75 mt-3 mb-0">Production web applications & client-side interfaces built with modern engineering practices.</p>
            </div>

            <div className="d-flex flex-wrap justify-content-center flex-wrap gap-2 gap-md-3 mt-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={`project-filter-btn ${activeCategory === category ? "active" : ""}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="row mt-5 g-4 justify-content-center px-3 px-md-0">
                {filteredProjects.length === 0 ? (
                    <div className="col-12 text-center py-5">
                        <p className="opacity-75 fs-5">No projects found in this category.</p>
                    </div>
                ) : (
                    filteredProjects.map((project) => (
                        <div className="col-12 col-md-6 col-lg-4" key={project.id}>
                            <div className="card project-card h-100">
                                <img src={project.image} className="card-img-top" alt={project.title} />
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex gap-2 flex-wrap mb-2">
                                        {project.badges.map((badge, idx) => (
                                            <span key={idx} className="project-badge">{badge}</span>
                                        ))}
                                    </div>
                                    <h4 className="fw-bold mt-1">{project.title}</h4>
                                    <p className="card-text opacity-75 text-14 flex-grow-1">{project.description}</p>
                                    {project.demoPill && (
                                        <div className="my-2">
                                            <span className="demo-pill">
                                                <i className="fa-solid fa-bolt me-1 text-warning"></i>
                                                {project.demoPill}
                                            </span>
                                        </div>
                                    )}
                                    <div className="border-top d-flex justify-content-between pt-3 mt-auto">
                                        <a className="link-badge" href={project.githubUrl} target="_blank" rel="noreferrer">
                                            <i className="fa-brands fa-github me-1"></i>Github
                                        </a>
                                        {project.liveDemoUrl && (
                                            <a className="link-badge" href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                                                Live Demo<i className="fa-solid fa-arrow-up-right-from-square ms-1"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Projects;
