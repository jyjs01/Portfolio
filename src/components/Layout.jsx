import { useState } from 'react';
import Header from './Header';
import { Main, Section, AboutWrapper, ProfileImage, InfoList, InfoItem, SocialLinks, Grid, SkillsGrid } from '../styles/LayoutStyle';
import ProjectCard from './ProjectCard';
import { FaUser, FaBirthdayCake, FaHome, FaEnvelope, FaGraduationCap, FaGithub } from 'react-icons/fa';
import { projects } from '../data/Projects';
import { skills } from '../data/Skills';
import profileImage from '../assets/profile.jpg';
import ProjectModal from './ProjectModal';

export default function Layout() {

  const [modalProject, setModalProject] = useState(null);

  const handleOpenModal = (project) => setModalProject(project);
  const handleCloseModal = () => setModalProject(null);

  return (
    <>
      <Header />
      <Main>
        <Section id="home">
          <h2>염재영</h2>
          <br />
          <p style={{ fontSize: 20, lineHeight: 1.8 }}>
            사용자 중심의 직관적인 UI/UX를 설계하고 구현하는 것을 즐기는 프론트엔드 개발자입니다.<br />
            React와 React Native를 활용해 효율적인 인터페이스를 구축하며,<br />
            백엔드와의 데이터 연동 및 API 최적화에도 관심을 가지고 있습니다.<br />
            새로운 기술을 학습하여 적용하고, 성능 최적화와 유지보수를 고려한<br />
            견고한 코드를 작성하는 것을 지향합니다.
          </p>
        </Section>

        <Section id="about">
          <h2>ABOUT</h2>
          <br />
          <AboutWrapper>
            <ProfileImage src={profileImage} alt="Profile" />
            <div>
              <InfoList>
                <InfoItem><FaUser /> 염재영 </InfoItem>
                <InfoItem><FaBirthdayCake /> 2001.11.08 </InfoItem>
                <InfoItem><FaHome /> 인천광역시 미추홀구 </InfoItem>
                <InfoItem><FaEnvelope /> duawodud12@naver.com </InfoItem>
                <InfoItem><FaGraduationCap /> 선문대학교 컴퓨터공학부 </InfoItem>
              </InfoList>
              <br />
              <SocialLinks>
                <a href="https://github.com/jyjs01" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
              </SocialLinks>
            </div>
          </AboutWrapper>
        </Section>

        <Section id="projects">
          <h2>PROJECTS</h2>
          <br />
          <Grid>
            {projects.map((project, idx) => (
                <ProjectCard project={project} key={project.title + idx} onOpenModal={handleOpenModal} />
            ))}
          </Grid>
        </Section>

        <Section id="skills">
          <h2>SKILLS</h2>
          <br />
          <SkillsGrid>
            {skills.map(skill => (
              <div className="skill-item" key={skill.name}>
                <div className="icon-name-box">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-desc">{skill.desc}</span>
              </div>
            ))}
          </SkillsGrid>
        </Section>

        <Section id="contact">
          <h2>CONTACT</h2>
          <p>
            Email: duawodud12@naver.com<br />
            GitHub: <a href="https://github.com/jyjs01" target="_blank" rel="noreferrer">https://github.com/jyjs01</a>
          </p>
        </Section>
      </Main>

      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
