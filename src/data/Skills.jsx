import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

export const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 color="#e34c26" />,
    desc: "HTML 문서 작성 및 시맨틱 마크업을 통한 웹 구조 설계 경험"
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt color="#1572B6" />,
    desc: "다양한 스타일링 및 반응형 레이아웃 구현 경험"
  },
  {
    name: "JavaScript",
    icon: <FaJs color="#f7e018" />,
    desc: "동적 웹 기능 구현 및 비동기 데이터 처리 경험"
  },
  {
    name: "React",
    icon: <FaReact color="#61DBFB" />,
    desc: "컴포넌트 기반 UI 설계, React Hooks/Context API, React Router 및 styled-components 활용 경험"
  },
  {
    name: "React Native",
    icon: <FaReact color="#61DBFB" />,
    desc: "모바일 앱 화면 설계, 네비게이션 구현, styled-components를 활용한 스타일링 경험"
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="#43853d" />,
    desc: "REST API 서버 구축, 데이터 처리 및 인증 로직 개발 경험"
  },
  {
    name: "MySQL",
    icon: <SiMysql color="#00758f" />,
    desc: "관계형 데이터베이스 설계 및 SQL 쿼리 작성, 데이터 관리 경험"
  },
];
