const Contact = () => {
  return (
    <div className="contact-section" id="contact-section">
      <h1>Contact us</h1>
      <div className="border"></div>
      <form className="contact-form">
        <input
          type="text"
          className="contact-form-text"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="contact-form-text"
          placeholder="Your Email"
        />
        <input
          type="text"
          className="contact-form-text"
          placeholder="Your Phone"
        />
        <textarea
          className="contact-form-text"
          placeholder="Your Message"
        ></textarea>
        <input type="submit" className="contact-form-btn" value="Send" />
      </form>
    </div>
  );
};
export default Contact;
