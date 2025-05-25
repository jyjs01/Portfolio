import { Card } from '../styles/ProjectCardStyle';

export default function ProjectCard({ title, description, image }) {
  return (
    <Card>
      <img src={image} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Card>
  );
}