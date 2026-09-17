"use client";

import { FormEvent, useState } from "react";

type SubmitStatus = "idle" | "success" | "error";

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<SubmitStatus>("idle");

  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    const form = event.currentTarget;

    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit your quote request.");
      }

      setStatus("success");

      setMessage(
        data.message || "Thank you. Your quote request has been received.",
      );

      form.reset();
    } catch (error) {
      setStatus("error");

      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your quote request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* Honeypot spam field */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">Website</label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="section-head compact-head">
        <div className="kicker">Request a Quote</div>

        <h2>Get a cleaning estimate</h2>

        <p>
          Tell us about your property and cleaning requirements. Our team will
          review your request and contact you.
        </p>
      </div>

      <div className="form-grid">
        {/* Company */}
        <div className="field">
          <label htmlFor="companyName">Company Name *</label>

          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            placeholder="Company name"
          />
        </div>

        {/* Contact */}
        <div className="field">
          <label htmlFor="contactName">Contact Name *</label>

          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            placeholder="Your name"
          />
        </div>

        {/* Phone */}
        <div className="field">
          <label htmlFor="phone">Phone Number *</label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+1 ..."
          />
        </div>

        {/* Email */}
        <div className="field">
          <label htmlFor="email">Email *</label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@company.com"
          />
        </div>

        {/* Location */}
        <div className="field full">
          <label htmlFor="serviceLocation">Service Location *</label>

          <input
            id="serviceLocation"
            name="serviceLocation"
            type="text"
            required
            placeholder="Property address, city, or service location"
          />
        </div>

        {/* Service */}
        <div className="field">
          <label htmlFor="cleaningType">Type of Cleaning *</label>

          <select
            id="cleaningType"
            name="cleaningType"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select service
            </option>

            <option value="Commercial Cleaning">Commercial Cleaning</option>

            <option value="Office Cleaning">Office Cleaning</option>

            <option value="Warehouse Cleaning">Warehouse Cleaning</option>

            <option value="Post-Construction Cleaning">
              Post-Construction Cleaning
            </option>

            <option value="Move-In / Move-Out Cleaning">
              Move-In / Move-Out Cleaning
            </option>

            <option value="Custom Cleaning Solution">
              Custom Cleaning Solution
            </option>
          </select>
        </div>

        {/* Schedule */}
        <div className="field">
          <label htmlFor="preferredSchedule">Preferred Schedule</label>

          <select
            id="preferredSchedule"
            name="preferredSchedule"
            defaultValue="One-time"
          >
            <option value="One-time">One-time</option>

            <option value="Daily">Daily</option>

            <option value="Weekly">Weekly</option>

            <option value="Multiple days per week">
              Multiple days per week
            </option>

            <option value="Project-based">Project-based</option>

            <option value="After hours">After hours</option>

            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        {/* Message */}
        <div className="field full">
          <label htmlFor="quoteMessage">Cleaning Requirements</label>

          <textarea
            id="quoteMessage"
            name="message"
            placeholder="Facility size, preferred start date, access hours, cleaning frequency, post-construction requirements, special areas, or anything else we should know."
          />
        </div>
      </div>

      {status !== "idle" && (
        <div
          className={
            status === "success" ? "form-message success" : "form-message error"
          }
          role="status"
          aria-live="polite"
        >
          {message}
        </div>
      )}

      <button
        className="btn btn-primary submit"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending Request..." : "Request My Free Quote"}
      </button>

      <p className="note form-note">
        Your request will be sent directly to the Texian Cleaning team. No email
        application will open.
      </p>
    </form>
  );
}
