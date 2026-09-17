import QuoteForm from "@/components/QuoteForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const services = [
  [
    "01",
    "Commercial Cleaning",
    "Professional cleaning for offices, retail spaces, commercial buildings, common areas, and business facilities.",
  ],
  [
    "02",
    "Office Cleaning",
    "Daily, weekly, or scheduled cleaning to maintain a clean, comfortable, and professional workplace.",
  ],
  [
    "03",
    "Warehouse Cleaning",
    "Cleaning support for warehouses, logistics facilities, distribution centers, and industrial workplaces.",
  ],
  [
    "04",
    "Post-Construction Cleaning",
    "Detailed cleanup after construction, remodeling, or renovation to prepare the property for occupancy, inspection, or handover.",
  ],
  [
    "05",
    "Move-In / Move-Out",
    "Business-focused cleaning for commercial properties during occupancy changes, relocations, and handovers.",
  ],
  [
    "06",
    "Custom Cleaning Solutions",
    "Tell us your space, schedule, and requirements. We can discuss a customized cleaning plan for your operation.",
  ],
];

const reasons = [
  [
    "Reliable Service",
    "We understand that businesses need cleaning teams they can count on and clear communication when plans change.",
  ],
  [
    "Flexible Scheduling",
    "Daily, weekly, one-time, project-based, after-hours, and customized service schedules can be discussed.",
  ],
  [
    "Business-Focused",
    "Our service is designed around commercial environments, operating schedules, access requirements, and facility needs.",
  ],
  [
    "Responsive Support",
    "We aim to respond quickly when clients need extra cleaning coverage, project support, or schedule changes.",
  ],
];

const testimonials = [
  [
    "Facility Manager",
    "Commercial Office - Frisco",
    "The team was easy to coordinate with and the service plan fit around our normal business hours without disrupting our staff.",
  ],
  [
    "Operations Manager",
    "Warehouse - Dallas",
    "We needed flexible cleaning support for a busy facility. Communication was straightforward and the scope was easy to understand.",
  ],
  [
    "Project Coordinator",
    "Post-Construction - Plano",
    "The cleanup plan focused on the details that matter before turnover, including dust, surfaces, floors, and final presentation.",
  ],
  [
    "Office Administrator",
    "Professional Office - Irving",
    "Scheduling was simple and the cleaning plan could be adjusted as our office needs changed.",
  ],
  [
    "Property Representative",
    "Commercial Property - DFW",
    "We appreciated having one point of contact and a clear understanding of what would be handled at each visit.",
  ],
  [
    "Site Supervisor",
    "Renovation Project - Fort Worth",
    "The post-construction cleanup approach made it easier to prepare the space for the next stage of the project.",
  ],
  [
    "Business Owner",
    "Retail Space - North Texas",
    "The service felt business-focused from the beginning, with attention to our operating hours and customer-facing areas.",
  ],
  [
    "Logistics Coordinator",
    "Distribution Facility - DFW",
    "The flexibility around our schedule was especially useful because our facility has changing operational demands.",
  ],
  [
    "Property Manager",
    "Move-In Cleaning - Frisco",
    "The team helped us prepare the property before occupancy with a practical cleaning scope and responsive communication.",
  ],
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-content">
            <div className="eyebrow">
              Professional Commercial Cleaning in Texas
            </div>

            <h1>Clean spaces. Reliable teams. Business-ready results.</h1>

            <p>
              Texian Cleaning provides flexible commercial and post-construction
              cleaning for offices, warehouses, retail spaces, facilities,
              construction projects, and other business locations across the
              Dallas-Fort Worth area and beyond.
            </p>

            <div className="hero-actions">
              <a href="#quote" className="btn btn-primary">
                Get a Free Quote
              </a>

              <a href="tel:+14692470295" className="btn btn-outline">
                Call +1 (469) 247-0295
              </a>
            </div>

            <div className="hero-strip">
              <span>Commercial Cleaning</span>
              <span>Post-Construction</span>
              <span>Flexible Scheduling</span>
              <span>Responsive Support</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services">
          <div className="container">
            <div className="section-head">
              <div className="kicker">Our Services</div>

              <h2>Cleaning support built around your operation</h2>

              <p>
                From recurring commercial service to detailed post-construction
                cleanup, we tailor the scope and schedule to your facility,
                operating hours, and project needs.
              </p>
            </div>

            <div className="grid services">
              {services.map(([number, title, text]) => (
                <article className="card" key={title}>
                  <div className="icon">{number}</div>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMMERCIAL + POST CONSTRUCTION */}
        <section className="featured-services" id="specialty">
          <div className="container">
            <div className="section-head">
              <div className="kicker">Core Cleaning Services</div>

              <h2>Commercial cleaning and post-construction cleanup</h2>

              <p>
                Two of our main service areas are designed for businesses that
                need dependable recurring cleaning or a detailed final cleanup
                after construction and renovation work.
              </p>
            </div>

            <div className="specialty-grid">
              {/* COMMERCIAL */}
              <article className="specialty-card">
                <div className="specialty-number">01</div>

                <div>
                  <div className="kicker">Commercial Cleaning</div>

                  <h3>Professional cleaning for business environments</h3>

                  <p>
                    Commercial cleaning means cleaning services for workplaces
                    and business properties rather than private homes. We can
                    discuss recurring or project-based service for offices,
                    retail spaces, warehouses, common areas, commercial
                    buildings, and other facilities.
                  </p>

                  <ul className="check-list">
                    <li>Offices and professional workplaces</li>
                    <li>Retail and customer-facing spaces</li>
                    <li>Warehouses and logistics facilities</li>
                    <li>Common areas, floors, surfaces, and touchpoints</li>
                    <li>Recurring, one-time, or customized schedules</li>
                  </ul>
                </div>
              </article>

              {/* POST CONSTRUCTION */}
              <article className="specialty-card">
                <div className="specialty-number">02</div>

                <div>
                  <div className="kicker">Post-Construction Cleaning</div>

                  <h3>
                    Prepare the property for occupancy, inspection, or handover
                  </h3>

                  <p>
                    Post-construction cleaning is the detailed cleanup completed
                    after construction, remodeling, or renovation work. The goal
                    is to remove remaining dust and job-site residue and leave
                    the space ready for its next use.
                  </p>

                  <ul className="check-list">
                    <li>Construction dust and light debris cleanup</li>

                    <li>Floors, surfaces, fixtures, and detail cleaning</li>

                    <li>Window and glass surface cleanup where included</li>

                    <li>Final presentation before turnover or occupancy</li>

                    <li>Scope customized to the project and site conditions</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="why" id="why">
          <div className="container">
            <div className="section-head">
              <div className="kicker">Why Texian Cleaning</div>

              <h2>Dependable service for busy Texas businesses</h2>
            </div>

            <div className="grid why-grid">
              {reasons.map(([title, text]) => (
                <article className="card" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <div className="section-head testimonial-head">
              <div className="kicker">Client Experience Preview</div>

              <h2>The kind of service experience we aim to deliver</h2>

              <p>
                These testimonial cards are sample launch copy for the website
                layout. Replace them with verified customer reviews before
                presenting them as actual client testimonials.
              </p>
            </div>

            <div className="testimonial-grid">
              {testimonials.map(([name, context, quote], index) => (
                <article className="testimonial-card" key={`${name}-${index}`}>
                  <div
                    className="stars"
                    aria-label="Five star design placeholder"
                  >
                    ★★★★★
                  </div>

                  <blockquote>&ldquo;{quote}&rdquo;</blockquote>

                  <div className="testimonial-person">
                    <div className="avatar" aria-hidden="true">
                      {name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <strong>{name}</strong>
                      <span>{context}</span>
                    </div>
                  </div>

                  <div className="sample-label">
                    Sample testimonial — replace with verified review
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section id="area">
          <div className="container">
            <div className="service-area">
              <div>
                <div className="eyebrow">Areas We Serve</div>

                <h2>Dallas-Fort Worth and other Texas locations</h2>

                <p>
                  Our primary service area is the DFW region. Other Texas
                  locations may be supported depending on project size, timing,
                  staffing, and service requirements.
                </p>
              </div>

              <div className="city-tags">
                <span>Frisco</span>
                <span>Dallas</span>
                <span>Fort Worth</span>
                <span>Plano</span>
                <span>Irving</span>
                <span>DFW Metroplex</span>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section id="quote">
          <div className="container quote-wrap">
            <aside className="contact-card">
              <div className="eyebrow">Contact Us</div>

              <h3>Tell us what needs to be cleaned.</h3>

              <p>
                Share your location, facility type, preferred schedule, and any
                special requirements. Our team will review your request and
                follow up.
              </p>

              <div className="contact-line">
                <strong>HI mac USA Inc.</strong>
                <br />
                Stonebriar Center
                <br />
                7460 Warren Parkway, Suite 100
                <br />
                Frisco, TX 75034, USA
              </div>

              <div className="contact-line">
                <strong>Phone</strong>
                <br />

                <a href="tel:+14692470295">+1 (469) 247-0295</a>
              </div>

              <div className="contact-line">
                <strong>Email</strong>
                <br />

                <a href="mailto:info@himac.us">info@himac.us</a>
              </div>

              <div className="contact-line">
                <strong>Business Hours</strong>
                <br />
                Monday-Friday, 9:00 AM-6:00 PM CST
              </div>
            </aside>

            <QuoteForm />
          </div>
        </section>
      </main>

      <SiteFooter />

      <a className="mobile-cta" href="#quote">
        Get a Free Quote
      </a>
    </>
  );
}
