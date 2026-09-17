import QuoteForm from "@/components/QuoteForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const services = [
  ["01", "Commercial Cleaning", "Professional cleaning for stores, commercial buildings, business facilities, common areas, and workplaces."],
  ["02", "Office Cleaning", "Daily, weekly, or scheduled cleaning to maintain a clean, comfortable, and professional workplace."],
  ["03", "Warehouse Cleaning", "Cleaning support for warehouses, logistics facilities, distribution centers, and industrial workplaces."],
  ["04", "Construction Cleaning", "Pre-construction, progress, and post-construction cleanup support for contractors and project teams."],
  ["05", "Move-In / Move-Out", "Business-focused cleaning for commercial properties during occupancy changes, relocations, and handovers."],
  ["06", "Custom Cleaning Solutions", "Tell us your space, schedule, and requirements. We can discuss a customized cleaning plan for your operation."],
];

const reasons = [
  ["Reliable Service", "We understand that businesses need cleaning teams they can count on and clear communication when plans change."],
  ["Flexible Scheduling", "Daily, weekly, one-time, project-based, after-hours, and customized service schedules can be discussed."],
  ["Business-Focused", "Our service is designed around commercial environments, operating schedules, access requirements, and facility needs."],
  ["Responsive Support", "We aim to respond quickly when clients need extra cleaning coverage, project support, or schedule changes."],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero">
          <div className="container hero-content">
            <div className="eyebrow">Professional Commercial Cleaning in Texas</div>
            <h1>Clean spaces. Reliable teams. Business-ready results.</h1>
            <p>Texian Cleaning provides flexible commercial cleaning for offices, warehouses, construction sites, facilities, and other business locations across the Dallas–Fort Worth area and beyond.</p>
            <div className="hero-actions">
              <a href="#quote" className="btn btn-primary">Get a Free Quote</a>
              <a href="tel:+14692470295" className="btn btn-outline">Call +1 (469) 247-0295</a>
            </div>
            <div className="hero-strip"><span>Flexible Scheduling</span><span>Commercial Focus</span><span>Responsive Support</span></div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="section-head"><div className="kicker">Our Services</div><h2>Cleaning support built around your operation</h2><p>From recurring office service to project-based cleanup, we tailor the scope and schedule to your facility, operating hours, and business needs.</p></div>
            <div className="grid services">
              {services.map(([number, title, text]) => <article className="card" key={title}><div className="icon">{number}</div><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="why" id="why">
          <div className="container">
            <div className="section-head"><div className="kicker">Why Texian Cleaning</div><h2>Dependable service for busy Texas businesses</h2></div>
            <div className="grid why-grid">
              {reasons.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="area">
          <div className="container">
            <div className="service-area">
              <div><div className="eyebrow">Areas We Serve</div><h2>Dallas–Fort Worth and other Texas locations</h2><p>Our primary service area is the DFW region. Other Texas locations may be supported depending on project size, timing, staffing, and service requirements.</p></div>
              <div className="city-tags"><span>Frisco</span><span>Dallas</span><span>Fort Worth</span><span>Plano</span><span>Irving</span><span>DFW Metroplex</span></div>
            </div>
          </div>
        </section>

        <section id="quote">
          <div className="container quote-wrap">
            <aside className="contact-card">
              <div className="eyebrow">Contact Us</div>
              <h3>Tell us what needs to be cleaned.</h3>
              <p>Share your location, facility type, preferred schedule, and any special requirements. Our team will review your request and follow up.</p>
              <div className="contact-line"><strong>HI mac USA Inc.</strong><br />Stonebriar Center<br />7460 Warren Parkway, Suite 100<br />Frisco, TX 75034, USA</div>
              <div className="contact-line"><strong>Phone</strong><br /><a href="tel:+14692470295">+1 (469) 247-0295</a></div>
              <div className="contact-line"><strong>Email</strong><br /><a href="mailto:info@himac.us">info@himac.us</a></div>
              <div className="contact-line"><strong>Business Hours</strong><br />Monday–Friday, 9:00 AM–6:00 PM CST</div>
            </aside>
            <QuoteForm />
          </div>
        </section>
      </main>
      <SiteFooter />
      <a className="mobile-cta" href="#quote">Get a Free Quote</a>
    </>
  );
}
