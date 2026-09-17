export default function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <a href="tel:+14692470295">+1 (469) 247-0295</a>

          <a href="mailto:info@himac.us">info@himac.us</a>

          <span>Frisco, Texas</span>
        </div>
      </div>

      <header>
        <div className="container nav">
          <a className="brand" href="#top">
            <span className="brand-mark">TC</span>

            <span>
              TEXIAN CLEANING
              <small>A Business Service of HI mac USA Inc.</small>
            </span>
          </a>

          <nav className="navlinks" aria-label="Main navigation">
            <a href="#services">Services</a>

            <a href="#specialty">Commercial & Construction</a>

            <a href="#testimonials">Testimonials</a>

            <a href="#area">Service Area</a>

            <a href="#quote" className="btn btn-primary">
              Request a Quote
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
