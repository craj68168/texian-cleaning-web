"use client";

import type { FormEvent } from "react";

export default function QuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = "Texian Cleaning - Quote Request";
    let body = `${subject}\n\n`;

    for (const [key, value] of formData.entries()) {
      body += `${key}: ${value}\n`;
    }

    window.location.href = `mailto:info@himac.us?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="section-head compact-head">
        <div className="kicker">Request a Quote</div>
        <h2>Get a cleaning estimate</h2>
      </div>
      <div className="form-grid">
        <div className="field"><label>Company Name *</label><input name="Company Name" required /></div>
        <div className="field"><label>Contact Name *</label><input name="Contact Name" required /></div>
        <div className="field"><label>Phone Number *</label><input name="Phone" type="tel" required /></div>
        <div className="field"><label>Email *</label><input name="Email" type="email" required /></div>
        <div className="field full"><label>Service Location *</label><input name="Service Location" required placeholder="City / address" /></div>
        <div className="field">
          <label>Type of Cleaning *</label>
          <select name="Type of Cleaning" required defaultValue="">
            <option value="" disabled>Select service</option>
            <option>Commercial Cleaning</option>
            <option>Office Cleaning</option>
            <option>Warehouse Cleaning</option>
            <option>Construction Cleaning</option>
            <option>Move-In / Move-Out</option>
            <option>Custom Cleaning</option>
          </select>
        </div>
        <div className="field">
          <label>Preferred Schedule</label>
          <select name="Preferred Schedule" defaultValue="One-time">
            <option>One-time</option><option>Daily</option><option>Weekly</option><option>Multiple days per week</option><option>Project-based</option><option>Not sure yet</option>
          </select>
        </div>
        <div className="field full"><label>Message</label><textarea name="Message" placeholder="Facility size, preferred start date, access hours, special cleaning needs, etc." /></div>
      </div>
      <button className="btn btn-primary submit" type="submit">Send Quote Request</button>
      <p className="note">Submitting opens your email app with the request pre-filled and addressed to info@himac.us.</p>
    </form>
  );
}
