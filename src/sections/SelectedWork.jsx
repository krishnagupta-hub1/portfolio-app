import "../styles/projects.css";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function SelectedWork() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <div>
          <h2>Selected Work</h2>
          <p>
            Explore a collection of my recent projects, focusing on user
            experience and performance.
          </p>
        </div>

        <a href="/projects" className="projects-link">
          View all projects
        </a>
      </div>

      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
