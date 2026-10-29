function Notfound() {
  return (
    <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center text-center">
      <h1 className="notfound-404 text-sub fw-bold">404</h1>
      <h1 className="fw-bold mb-2">Page Not Found</h1>
      <p className="opacity-75 mb-4">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="btn btn-sub">
        <i className="fa-solid fa-arrow-left-long me-2"></i>Back to Home
      </a>
    </div>
  );
}

export default Notfound;