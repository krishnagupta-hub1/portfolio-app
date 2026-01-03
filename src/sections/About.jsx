import "../styles/about.css";
import profileImage from "../assets/images/profile.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="about-image">
          <img src={profileImage} alt="Krishna Gupta" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I am a dedicated professional with a passion for creating meaningful
            digital solutions. My journey in technology began with curiosity
            about how things work.
          </p>

          <p>
            Over the years, I have honed my skills in modern web technologies and
            continuously strive to stay ahead of industry trends.
          </p>

          <div className="about-skills">
            <ul>
              <li>React & React Native</li>
              <li>Node.js & Express</li>
              <li>PostgreSQL</li>
            </ul>

            <ul>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>UI / UX Design</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
