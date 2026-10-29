import { useState } from "react";

function Contact() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("rakshit4713@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");

        const data = new FormData(event.target);
        data.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data
            });

            const resData = await response.json();
            if (resData.success) {
                setResult("success");
                event.target.reset();
            } else {
                setResult(resData.message || "Failed to send message. Please try again.");
            }
        } catch {
            setResult("Network error. Please try again or email directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="container-lg py-5 my-4">
            <div className="text-center mb-5">
                <span className="contact-badge text-uppercase mb-2">
                    <i className="fa-solid fa-sparkles me-1"></i>Let's Connect
                </span>
                <h1 className="fw-bolder text-white text-60 mt-3">Get In <span className="text-sub">Touch</span></h1>
                <div className="edu-title-line"></div>
                <p className="opacity-75 mt-3 mb-0">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
            </div>

            <div className="row g-4 align-items-stretch">
                <div className="col-12 col-md-5 d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column gap-3">
                        <div className="contact-card align-items-center">
                            <div className="contact-icon-box">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="me-2">
                                <span className="contact-card-label">Email</span>
                                <a href="mailto:rakshit4713@gmail.com" className="contact-card-value text-decoration-none d-block">
                                    rakshit4713@gmail.com
                                </a>
                            </div>
                            <button type="button" onClick={handleCopyEmail} className="btn btn-copy ms-auto d-flex align-items-center gap-1 rounded-pill px-3 py-1">
                                {copied ? (
                                    <>
                                        <i className="fa-solid fa-check text-success"></i>
                                        <span className="text-success text-12">Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-regular fa-copy"></i>
                                        <span className="text-12">Copy</span>
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon-box">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                                <span className="contact-card-label">Location</span>
                                <p className="contact-card-value mb-0">
                                    Bhilwara, Rajasthan, India
                                </p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon-box">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <div>
                                <span className="contact-card-label">Availability</span>
                                <p className="contact-card-value mb-0 text-14">
                                    Open for freelance & full-time roles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-7">
                    <div className="contact-form-card">
                        {result === "success" && (
                            <div className="alert border-0 mb-4 rounded-3 d-flex align-items-center gap-2" role="alert" style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80", border: "1px solid rgba(74, 222, 128, 0.3)" }}>
                                <i className="fa-solid fa-circle-check fs-5"></i>
                                <span>Thank you! Your message has been sent successfully to my email.</span>
                            </div>
                        )}

                        {result && result !== "success" && result !== "Sending...." && (
                            <div className="alert border-0 mb-4 rounded-3 d-flex align-items-center gap-2" role="alert" style={{ background: "rgba(239, 68, 68, 0.15)", color: "#f87171", border: "1px solid rgba(248, 113, 113, 0.3)" }}>
                                <i className="fa-solid fa-circle-exclamation fs-5"></i>
                                <span>{result}</span>
                            </div>
                        )}

                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="contact-name" className="contact-form-label">Name</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    className="contact-form-input form-control"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="contact-email" className="contact-form-label">Email</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    className="contact-form-input form-control"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="contact-subject" className="contact-form-label">Subject</label>
                                <input
                                    type="text"
                                    id="contact-subject"
                                    name="subject"
                                    className="contact-form-input form-control"
                                    placeholder="How can I help you?"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="contact-message" className="contact-form-label">Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows="5"
                                    className="contact-form-input form-control"
                                    placeholder="Write your message here..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-submit-btn w-100" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Sending message...
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-regular fa-paper-plane me-2"></i>Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
