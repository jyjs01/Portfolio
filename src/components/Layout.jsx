import Header from './Header';
import { Main, Section, AboutWrapper, ProfileImage, InfoList, InfoItem, SocialLinks, Grid } from '../styles/LayoutStyle';
import ProjectCard from './ProjectCard';
import { FaUser, FaBirthdayCake, FaHome, FaEnvelope, FaGraduationCap, FaGithub, FaBlogger } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Section id="home" bg="rgba(255,255,255,0.9)">
          <h2>염재영</h2>
          <p style={{ fontSize: 20, lineHeight: 1.8 }}>
            사용자 중심의 직관적인 UI/UX를 설계하고 구현하는 것을 즐기는 프론트엔드 개발자입니다.<br />
            React와 React Native를 활용해 효율적인 인터페이스를 구축하며,<br />
            백엔드와의 데이터 연동 및 API 최적화에도 관심을 가지고 있습니다.<br />
            새로운 기술을 학습하여 적용하고, 성능 최적화와 유지보수를 고려한<br />
            견고한 코드를 작성하는 것을 지향합니다.
          </p>
        </Section>

        <Section id="about" bg="rgba(255,255,255,0.8)">
          <h2>ABOUT</h2>
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
              <SocialLinks>
                <a href="https://github.com/jyjs01" target="_blank" rel="noreferrer"><FaGithub /> Git</a>
                <a href="https://blog.example.com" target="_blank" rel="noreferrer"><FaBlogger /> BLOG</a>
              </SocialLinks>
            </div>
          </AboutWrapper>
        </Section>

        <Section id="projects" bg="rgba(255,255,255,0.8)">
          <h2>프로젝트</h2>
          <Grid>
            <ProjectCard
              title="CoursePlate"
              description="사용자의 여행 지역과 음식 취향을 기반으로 음식점을 추천하는 모바일 애플리케이션 (React Native 기반)"
              image="/project1.jpg"
            />
            <ProjectCard
              title="Interactive Reading Club"
              description="책 추천 및 독서 클럽 커뮤니티 웹 서비스 (React + Node.js + MySQL)"
              image="/project2.jpg"
            />
            <ProjectCard
              title="Notice Counsel"
              description="모바일 기반 학사 상담 예약 및 공지 관리 앱 (Android Studio + Node.js)"
              image="/project3.jpg"
            />
            <ProjectCard
              title="ConnectHub"
              description="시각장애인을 위한 커뮤니티 플랫폼 (React 기반 웹서비스)"
              image="/project4.jpg"
            />
          </Grid>
        </Section>

        <Section id="contact" bg="rgba(255,255,255,0.8)">
          <h2>Contact</h2>
          <p>
            Email: duawodud12@naver.com<br />
            GitHub: <a href="https://github.com/jyjs01" target="_blank" rel="noreferrer">https://github.com/jyjs01</a>
          </p>
        </Section>
      </Main>
    </>
  );
}
