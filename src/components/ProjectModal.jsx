import { useState, useEffect } from "react";
import { ModalOverlay, ModalBox, CloseBtn } from "../styles/ProjectModalStyle";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // 항상 배열로 맞추기
  const images = Array.isArray(project.image) ? project.image : [project.image];

  // 1번(index=1)부터 전환 (0번 이미지는 항상 제외)
  const slideImages = images.length > 1 ? images.slice(1) : images;
  const [imgIdx, setImgIdx] = useState(0); // 슬라이드용 인덱스 (slideImages용)
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (slideImages.length <= 1) return; // 슬라이드 이미지가 없거나 1개뿐이면 슬라이드 없음
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImgIdx((prev) => (prev + 1) % slideImages.length);
        setFade(true);
      }, 200);
    }, 2700);
    return () => clearInterval(interval);
  }, [slideImages.length]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>&times;</CloseBtn>
        <img
          className="image"
          src={slideImages[imgIdx]}
          alt={project.title}
          style={{
            width: '100%',
            borderRadius: '10px',
            opacity: fade ? 1 : 0,
            transition: 'opacity 0.2s'
          }}
        />
        <h2 style={{ margin: "1rem 0 0.5rem", textAlign: 'center' }}>{project.title}</h2>
        <p style={{ color: "#555", marginBottom: "1rem", textAlign: 'center' }}>{project.detail}</p>
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
            {project.work && project.work.map(w => <li style={{ listStyle: "none" }} key={w}>{w}</li>)}
          </ul>
        </div>
        {project.source && (
          <div style={{ marginTop: "1rem" }}>
            <a href={project.source} target="_blank" rel="noreferrer">Source Code</a>
          </div>
        )}
      </ModalBox>
    </ModalOverlay>
  );
}
