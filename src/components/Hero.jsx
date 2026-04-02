import React, { useEffect, useRef } from "react";
import "../style.css";
import { gsap } from "gsap";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Hero() {
  const heroRef = useRef(null);
  const photoRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const socialsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(photoRef.current,
      { scale: 0, opacity: 0, rotate: -10 },
      { scale: 1, opacity: 1, rotate: 0, duration: 1 }
    )
    .fromTo(labelRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, "-=0.4"
    )
    .fromTo(titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }, "-=0.3"
    )
    .fromTo(roleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, "-=0.3"
    )
    .fromTo(descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, "-=0.3"
    )
    .fromTo(actionsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, "-=0.3"
    )
    .fromTo(socialsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }, "-=0.2"
    );

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (photoRef.current) {
        photoRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg-glow"></div>

      <div className="hero-inner">

        <div className="hero-photo-wrap" ref={photoRef}>
          <div className="hero-photo-circle">
            <img src="/mubarak.jpg" alt="Mubarak Lawal" className="hero-photo" />
          </div>
          <div className="hero-photo-ring"></div>
        </div>

        <div className="hero-content">
          <div className="hero-label" ref={labelRef}>Available for work</div>

          <h1 ref={titleRef}>Mubarak<br /><em>Lawal</em></h1>

          <p className="hero-role" ref={roleRef}>Full-Stack Developer</p>

          <p className="hero-desc" ref={descRef}>
            Building scalable, high-performance web apps with flawless UIs. React, Node.js, MongoDB.
          </p>

          <div className="hero-actions" ref={actionsRef}>
            <a href="#projects" className="btn-primary">
              <i className="fas fa-arrow-down"></i> View Work
            </a>
            <a href="/cv.pdf" className="btn-outline">
              <i className="fas fa-file-arrow-down"></i> Download CV
            </a>
          </div>

          <div className="hero-socials" ref={socialsRef}>
            <a href="https://github.com/AMSDEV345"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ams-muzee-9b39873a8"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/amsdev00"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@muzeedev"><FaTiktok /></a>
            <a href="https://www.facebook.com/share/1AxLbUHfzS/"><FaFacebookF /></a>
            <a href="https://x.com/ams_dev2"><FaXTwitter /></a>
            <a href="https://wa.me/2348128425129"><FaWhatsapp /></a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;