import React from 'react'
import Layout from '../components/Layout/Layout'


const About = () => {
  return (

    <Layout title={"About Us"}>
    <div>
  <section id="page-header" className="about-header" style={{backgroundImage: "url(/images/banner.png)"}}>
    <h2>#KnowUs</h2>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
  </section>
  <section id="about-head" className="section-p1">
    <img src="/images/about/a6.jpg" alt />
    <div>
      <h2>Who We Are?</h2>
      <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto tempora sed ab iure atque quae quas dolorem temporibus dignissimos! Numquam cum repellat iure deleniti assumenda commodi voluptates quas consequuntur. Enim.
        Perspiciatis, quod ipsa aliquam, eaque maxime reiciendis atque assumenda neque possimus velit veniam? Architecto eos, quos praesentium soluta fugit eius vero porro omnis culpa. Mollitia ullam quasi ratione accusamus quam.</p>
      <abbr title>Create stunnig images with as much or as little control as you like thanks to choice of basic and creative modes.</abbr>
      <br />
      <br />
      <marquee bgcolor="#ccc" loop={-1} scrollamount={5} width="100%">Create stunnig images with as much or as little control as you like thanks to choice of basic and creative modes.</marquee>
    </div>
  </section>
  <section id="about-app" className="section-p1">
    <h1>Download Our <a href="https://play.google.com/store" target="_blank">App</a></h1>
    <div className="video">
      <video autoPlay muted loop src="/images/1.mp4" />
    </div>
  </section>
  <section id="feature" className="section-p1">
    <div className="fe-box">
      <img src="/images/features/f1.png" alt />
      <h6>Free Shipping</h6>
    </div>
    <div className="fe-box">
      <img src="/images/features/f2.png" alt />
      <h6>Online Order</h6>
    </div>
    <div className="fe-box">
      <img src="/images/features/f3.png" alt />
      <h6>Save Money</h6>
    </div>
    <div className="fe-box">
      <img src="/images/features/f4.png" alt />
      <h6>Promotions</h6>
    </div>    
    <div className="fe-box">
      <img src="/images/features/f5.png" alt />
      <h6>Happy Sell</h6>
    </div>
    <div className="fe-box">
      <img src="/images/features/f6.png" alt />
      <h6>24/7 Support</h6>
    </div>
  </section>
</div>
  </Layout>
  )
}

export default About