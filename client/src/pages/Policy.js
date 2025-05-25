import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
 <Layout title={"Policy page"}>
  <div class="policy-container">
    <header class="policy-header" style={{backgroundImage: "url(/images/banner.png)"}}>
      <h1>#Privacy Policy</h1>
      <p class="effective-date">Effective Date: 2025</p>
    </header>


    <main class="policy-content section-p1" >
      <div id='policy-image'> 
<img src="/images/policy/pp1.png" alt="Privacy Policy" />
<img src="/images/policy/pp2.jpg" alt="Privacy Policy" />
<img src="/images/policy/pp3.png" alt="Privacy Policy" />
<img src="/images/policy/pp4.jpg" alt="Privacy Policy" />
<img src="/images/policy/pp5.webp" alt="Privacy Policy" />
      </div>

      <div class="policy-intro">
      <section> 
        <h2>1. Information We Collect</h2>
        <p>We collect personal information (name, email), usage data (IP, browser type), and cookies to improve your experience.</p>
      </section>

      <section>
        <h2>2. How We Use Information</h2>
        <p>Your information helps us provide, personalize, and enhance our services. We also use it to communicate with you and for security purposes.</p>
      </section>

      <section>
        <h2>3. Sharing of Information</h2>
        <p>We do not sell your data. We may share it with trusted service providers or comply with legal obligations.</p>
      </section>

      <section>
        <h2>4. Cookies and Tracking</h2>
        <p>Cookies help us enhance your user experience. You can adjust your cookie settings anytime through your browser.</p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You have rights to access, correct, or delete your personal data. You can also opt-out of marketing communications.</p>
      </section>

      <section>
        <h2>6. Security of Your Data</h2>
        <p>We use industry-standard security measures, but no system is 100% secure. Please use our services with caution.</p>
      </section>

      <section>
        <h2>7. Third-Party Links</h2>
        <p>Our website may link to third-party sites. We are not responsible for their privacy policies.</p>
      </section>

      <section>
        <h2>8. Updates to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Updates will be posted on this page.</p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>Email: project@gmail.com</li>
          <li>Address: BBDU</li>
        </ul>
      </section></div>

    </main>
  </div>
    </Layout>
  );
};

export default Policy;
