export default function ProjectCard({ project }) {
  const handleClick = () => {
    window.open(project.liveUrl, "_blank");
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <img src={project.image} alt={project.title} />

      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
