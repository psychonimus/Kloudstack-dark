import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import ReCAPTCHA from "react-google-recaptcha";
import "./EnquiryModal.css";

const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY ||
  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const SERVICES_OPTIONS = [
  "Cybersecurity & ZTNA",
  "AI & Business Intelligence",
  "Cloud & Hybrid Foundations",
  "Operational Continuity",
  "Modular Open Stack",
  "Custom Software Development",
  "DevOps & Automation",
  "Other / General Enquiry",
];

const EnquiryModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scrolling when modal is open and reset captcha
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setErrorMessage("");
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    // Validate Google reCAPTCHA
    if (!captchaToken) {
      setErrorMessage("Please check the 'I am not a robot' box before submitting.");
      setLoading(false);
      return;
    }

    try {
      const isLocalhost =
        typeof window !== "undefined" &&
        (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
      const apiUrl = isLocalhost ? "/api/enquiry" : (import.meta.env.VITE_API_URL || "/api/enquiry");
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          captchaToken,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to submit enquiry. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Enquiry submission error:", err);
      setErrorMessage(
        err.message ||
          "Unable to connect to the server. Please check your connection.",
      );
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setSubmitted(false);
    setErrorMessage("");
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="enquiry-modal-backdrop" onClick={onClose}>
          <motion.div
            className="enquiry-modal-container"
            data-lenis-prevent="true"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close button */}
            <button
              type="button"
              className="enquiry-modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <IoClose />
            </button>

            {!submitted ? (
              <div className="enquiry-form-wrapper">
                <div className="enquiry-header">
                  <h2 className="enquiry-title">Send an Enquiry</h2>
                  <p className="enquiry-subtitle">
                    Fill in the details below and a member of our team will
                    reach out within one business day.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="enquiry-form">
                  {errorMessage && (
                    <div className="enquiry-error-banner" role="alert">
                      <span>⚠️</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="enquiry-grid">
                    {/* First Name */}
                    <div className="enquiry-field">
                      <label className="enquiry-label" htmlFor="eq-firstName">
                        FIRST NAME *
                      </label>
                      <input
                        id="eq-firstName"
                        name="firstName"
                        type="text"
                        className="enquiry-input"
                        placeholder="Vishal"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Last Name */}
                    <div className="enquiry-field">
                      <label className="enquiry-label" htmlFor="eq-lastName">
                        LAST NAME *
                      </label>
                      <input
                        id="eq-lastName"
                        name="lastName"
                        type="text"
                        className="enquiry-input"
                        placeholder="Goyal"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Work Email */}
                    <div className="enquiry-field">
                      <label className="enquiry-label" htmlFor="eq-email">
                        WORK EMAIL *
                      </label>
                      <input
                        id="eq-email"
                        name="email"
                        type="email"
                        className="enquiry-input"
                        placeholder="vishal@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="enquiry-field">
                      <label className="enquiry-label" htmlFor="eq-phone">
                        PHONE NUMBER
                      </label>
                      <input
                        id="eq-phone"
                        name="phone"
                        type="tel"
                        className="enquiry-input"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Company */}
                    <div className="enquiry-field">
                      <label className="enquiry-label" htmlFor="eq-company">
                        COMPANY / ORGANISATION *
                      </label>
                      <input
                        id="eq-company"
                        name="company"
                        type="text"
                        className="enquiry-input"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Service Interest */}
                    <div className="enquiry-field">
                      <label className="enquiry-label" htmlFor="eq-service">
                        SERVICE INTEREST
                      </label>
                      <select
                        id="eq-service"
                        name="service"
                        className="enquiry-select"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service...</option>
                        {SERVICES_OPTIONS.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="enquiry-field enquiry-field-full">
                      <label className="enquiry-label" htmlFor="eq-message">
                        MESSAGE *
                      </label>
                      <textarea
                        id="eq-message"
                        name="message"
                        className="enquiry-textarea"
                        placeholder="Tell us about your project, challenge, or question..."
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        required
                      />
                    </div>

                    {/* Google reCAPTCHA v2 */}
                    <div className="enquiry-field enquiry-field-full">
                      <div className="recaptcha-field">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={RECAPTCHA_SITE_KEY}
                          theme="dark"
                          onChange={(token) => {
                            setCaptchaToken(token);
                            if (errorMessage) setErrorMessage("");
                          }}
                          onExpired={() => setCaptchaToken(null)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Footer Row */}
                  <div className="enquiry-footer">
                    <div className="enquiry-disclaimer">
                      <span>
                        By submitting, you agree to our Privacy Policy.
                      </span>
                      <span>We never share your data with third parties.</span>
                    </div>

                    <button
                      type="submit"
                      className="enquiry-submit-btn"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="enquiry-btn-loading">
                          <span className="enquiry-spinner" />
                          Sending...
                        </span>
                      ) : (
                        <span>Send Enquiry ›</span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="enquiry-success-view">
                <div className="enquiry-success-icon">✓</div>
                <h3 className="enquiry-success-title">Enquiry Submitted!</h3>
                <p className="enquiry-success-text">
                  Thank you for reaching out. A specialist from our team will
                  contact you within one business day.
                </p>
                <div className="enquiry-success-actions">
                  <button
                    type="button"
                    className="enquiry-submit-btn"
                    onClick={onClose}
                  >
                    Done
                  </button>
                  <button
                    type="button"
                    className="enquiry-reset-btn"
                    onClick={handleReset}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
