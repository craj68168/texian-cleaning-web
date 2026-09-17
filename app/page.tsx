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
  {
    name: "Sarah Mitchell",
    role: "Facility Manager",
    context: "Commercial Office • Frisco, TX",
    rating: 5,
    image: "https://i.pravatar.cc/120?img=47",
    quote:
      "The team was easy to coordinate with and worked around our regular office hours. The entire process was straightforward, and our workspace looked excellent after each service.",
  },
  {
    name: "Daniel Brooks",
    role: "Operations Manager",
    context: "Warehouse • Dallas, TX",
    rating: 4,
    image: "https://i.pravatar.cc/120?img=12",
    quote:
      "We needed flexible cleaning support for a busy warehouse. Communication was clear, scheduling was simple, and the cleaning scope was easy for our operations team to manage.",
  },
  {
    name: "Amanda Collins",
    role: "Project Coordinator",
    context: "Post-Construction • Plano, TX",
    rating: 5,
    image: "https://i.pravatar.cc/120?img=45",
    quote:
      "The final cleanup made a noticeable difference before turnover. Dust, floors, surfaces, and the finishing details were handled carefully and the space was presentation-ready.",
  },
  {
    name: "Kevin Turner",
    role: "Office Administrator",
    context: "Professional Office • Irving, TX",
    rating: 4,
    image: "https://i.pravatar.cc/120?img=11",
    quote:
      "Scheduling was easy and we were able to adjust the cleaning plan when our office needs changed. Having a responsive contact made everything much easier.",
  },
  {
    name: "Rachel Morgan",
    role: "Property Representative",
    context: "Commercial Property • DFW",
    rating: 5,
    image: "https://i.pravatar.cc/120?img=44",
    quote:
      "We appreciated having one point of contact and knowing exactly what would be handled during each visit. The service felt organized and professional.",
  },
  {
    name: "Christopher Hayes",
    role: "Site Supervisor",
    context: "Renovation Project • Fort Worth, TX",
    rating: 4,
    image: "https://i.pravatar.cc/120?img=15",
    quote:
      "The post-construction cleaning helped us prepare the property for the next stage of the project. The team understood what needed attention before handover.",
  },
 
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
              {testimonials.map((testimonial, index) => (
                <article
                  className="testimonial-card"
                  key={`${testimonial.name}-${index}`}
                >
                  <div className="testimonial-rating-row">
                    <div
                      className="stars"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className={
                            starIndex < testimonial.rating
                              ? "star-filled"
                              : "star-empty"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <span className="rating-number">
                      {testimonial.rating}.0
                    </span>
                  </div>

                  <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>

                  <div className="testimonial-person">
                    <img
                      src={testimonial.image}
                      alt=""
                      className="testimonial-avatar"
                    />

                    <div className="testimonial-person-info">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                      <small>{testimonial.context}</small>
                    </div>
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
