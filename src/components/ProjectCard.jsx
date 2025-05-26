import { Card } from '../styles/ProjectCardStyle';

export default function ProjectCard({ project, onOpenModal }) {
  const handleClick = () => onOpenModal(project);

  return (
    <Card onClick={handleClick}>
      {Array.isArray(project.image)
        ? (<img src={project.image[0]} alt={project.title} />)
        : (<img src={project.image} alt={project.title} />)
      }
      <div className="content">
        <h3>{project.title}</h3>
        <p>{project.detail}</p>
      </div>
    </Card>
  );
}
