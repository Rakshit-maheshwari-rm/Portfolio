import { useState, useEffect } from "react";

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = ["home", "about", "education", "experience", "skills", "projects", "contact"];

        const handleScroll = () => {
            const scrollPos = window.scrollY + 180;
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const top = el.offsetTop;
                    if (scrollPos >= top) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" }
    ];

    return (
        <nav className="navbar navbar-expand-lg rounded-4 mt-3 mx-3 mx-md-4 px-2">
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold" href="#home">
                    <span className="me-2 title-text">&lt;/&gt;</span>Rakshit.dev
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.id}>
                                <a
                                    className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                                    href={`#${item.id}`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
