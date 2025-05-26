import { ModalOverlay, ModalBox, CloseBtn } from "../styles/ProjectModalStyle";

export default function ProjectModal({ project, onClose }) {

  if (!project) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>&times;</CloseBtn>
        <img className="image" src={project.image} alt={project.title} style={{width:'100%', borderRadius:'10px'}} />
        <h2 style={{margin: "1rem 0 0.5rem"}}>{project.title}</h2>
        <p style={{color: "#555", marginBottom: "1rem"}}>{project.detail}</p>
        <div>
          <strong>기간:</strong> {project.start} ~ {project.end}
        </div>
        <div>
          <strong>Tech:</strong>{" "}
          {project.tech &&
            project.tech.map((tech, idx) => (
              <span
                key={tech}
                style={{ marginRight: idx !== project.tech.length - 1 ? "1em" : 0 }}
              >
                {tech}
              </span>
            ))}
        </div>

        <div>
          <strong>My Work:</strong>
          <ul>
            {project.work && project.work.map(w => <li style={{listStyle: "none"}} key={w}>{w}</li>)}
          </ul>
        </div>
        {project.source && (
          <div style={{marginTop: "1rem"}}>
            <a href={project.source} target="_blank" rel="noreferrer">Source Code</a>
          </div>
        )}
      </ModalBox>
    </ModalOverlay>
  );
}
