import React from "react";
import Layout from "./../components/Layout/Layout";


const Contact = () => {
  return (
<Layout title={"Contact Us"}>
<div>
  <section id="page-header" className="about-header" style={{backgroundImage: "url(/images/banner.png)"}}>
    <h2>#let's_talk</h2>
    <p>LEAVE A MESSAGE.We love to hear from you</p>
  </section>
  <section id="contact-details" className="section-p2">
    <div className="details">
      <span>GET IN TOUCH</span>
      <h2>Visit one of our agencies locations or contact us today</h2>
      <h3>Head Office</h3>
      <div>
        <li>
          <i className="fa-solid fa-map" />
          <p>BBDU</p>
        </li>
        <li>
          <i className="fa-solid fa-envelope" />
          <p>Contact@example.com</p>
        </li>
        <li>
          <i className="fa-solid fa-phone" />
          <p>+91 123456789</p>
        </li>
        <li>
          <i className="fa-solid fa-clock" />
          <p>Monday yo Saturday: 9:00am to 16:00pm </p>
        </li>
      </div>
    </div>
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5984.644966215426!2d81.05751430499728!3d26.887902273174998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be209f58895a1%3A0x8328acaa3eddd4f!2sBabu%20Banarasi%20Das%20University!5e0!3m2!1sen!2sin!4v1747044182595!5m2!1sen!2sin"  width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  </section>
  <section id="form-details">
    <form action>
      <span>LEAVE A MESSAGE</span>
      <h2>We love to hear from you</h2>
      <input type="text" placeholder="Your Name" />
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Subject" />
      <textarea name id cols={30} rows={10} placeholder="Your Message" defaultValue={""} />
      <button className="normal">Submit</button>
    </form>
    <div className="people">
      <div>
        <img src="/images/contact/c1.png" alt />
        <p><span>Priyanshu Singh</span><br />Senior Marketing Manager <br /> Phone: +91 0000000000 <br />Email: contact@exaple.com</p>
      </div>
      <div>
        <img src="/images/contact/c2.png" alt />
        <p><span>Samra Atique</span><br />Senior Marketing Manager <br /> Phone: +91 0000000000 <br />Email: contact@exaple.com</p>
      </div>
      <div>
        <img src="/images/contact/c3.png" alt />
        <p><span>Rishika verma</span><br />Senior Marketing Manager <br /> Phone: +91 0000000000 <br />Email: contact@exaple.com</p>
      </div>
      <div>
        <img src="/images/contact/c4.png" alt />
        <p><span>Priti Chauhan</span><br />Senior Marketing Manager <br /> Phone: +91 0000000000 <br />Email: contact@exaple.com</p>
      </div>
      <div>
        <img src="/images/contact/c5.png" alt />
        <p><span>Rachna Chaudhry</span><br />Senior Marketing Manager <br /> Phone: +91 0000000000 <br />Email: contact@exaple.com</p>
      </div>
    </div>
  </section>
</div>
 </Layout>
  );
};

export default Contact;