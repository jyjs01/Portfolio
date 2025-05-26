import profileImage from '../assets/profile.jpg';
import { projectImages } from './Images.jsx';

export const projects = [
    {
        title: "CoursePlate",
        image: projectImages.coursePlate,
        detail: "사용자의 여행 지역과 음식 취향을 기반으로 음식점을 추천하는 모바일 앱",
        start: "2025.03.04",
        end: "2025.06.10",
        tech: ["JavaScript",
                "Java",
                "React Native", 
                "Spring", 
                "Python", 
                "MongoDB",
                "Naver Maps API",
                "Naver Search API",
                "coolSMS"
            ],
        work: ["UI/UX 디자인", "React Native 기반 화면 구현", "Naver Maps API 연동", "Spring 서버 API 연동"],
        source: "https://github.com/Course-Plate/CP_Final",
    },

    {
        title: "Interactive Reading Club",
        image: projectImages.irc,
        detail: "책 추천 및 독서 클럽 커뮤니티 웹 서비스",
        start: "2024.07.15",
        end: "2024.08.18",
        tech: ["JavaScript",
                "React", 
                "Node.js",
                "MySQL",
                "Google Books API"
            ],
        work: ["UI/UX 디자인", "React 기반 화면 구현", "Node.js 서버 구성, API 구현 및 연동"],
        source: "https://github.com/jyjs01/Interactive_Reading_Club",
    },

    {
        title: "Notice Counsel",
        image: projectImages.noticeCounsel,
        detail: "모바일 기반 학사 상담 예약 및 공지 관리 앱",
        start: "2024.09.02",
        end: "2024.12.16",
        tech: ["Java",
                "Android",
                "JavaScript",
                "Node.js",
                "MySQL",
                "Firebase Cloud Messaging(추가 개선 필요)",
                "Hugging Face API"
            ],
        work: ["UI/UX 디자인", "Android(Java) 기반 화면 구현", "Node.js 서버 구성, API 구현 및 연동"],
        source: "https://github.com/jyjs01/Notice-Counsel",
    },

    {
        title: "ConnectHub",
        image: projectImages.connectHub,
        detail: "시각장애인을 위한 커뮤니티 플랫폼",
        start: "2024.04.22",
        end: "2024.06.14",
        tech: ["JavaScript", 
                "React",
                "TTS/STT",
                "Node.js",
                "MySQL",
                "Twilio"
            ],
        work: ["UI/UX 디자인", "React 기반 화면 구현"],
        source: "https://github.com/pkun2/ConnectHub",
    },

    {
        title: "Portfolio",
        image: profileImage,
        detail: "포트폴리오 페이지",
        start: "2025.05.25",
        end: "2025.05.27",
        tech: ["JavaScript", "React"],
        work: ["React 기반 화면 구현"],
        source: "https://github.com/jyjs01/Portfolio",
    }
]