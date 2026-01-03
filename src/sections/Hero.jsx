import "../styles/hero.css";
import profileImage from "../assets/images/profile.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-avatar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={profileImage} alt="Profile" />
        <span className="hero-badge">OPEN TO WORK</span>
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hello, I'm <br />
        <span>Krishna Gupta.</span>
      </motion.h1>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I'm a Frontend / Full Stack Developer based in India. I specialize in
        building clean, modern digital experiences and solving problems with
        efficient code.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button className="primary">See my work</button>
        <button className="secondary">Download CV</button>
      </motion.div>
    </section>
  );
}
