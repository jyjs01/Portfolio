import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 10rem;
  padding: clamp(1rem, 4vw, 2rem);
  max-width: 1024px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;

export const Section = styled.section`
  width:100%; 
  scroll-margin-top:6rem;
  padding: clamp(2rem,6vw,4rem) clamp(1rem,5vw,3rem);
  border-radius: 22px;

  background:
  url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='2' cy='2' r='2' fill='%23b6a4fd' fill-opacity='0.22'/%3E%3Ccircle cx='38' cy='38' r='2' fill='%2366a6ff' fill-opacity='0.16'/%3E%3C/svg%3E")
  repeat,
  rgba(255,255,255,0.89);

  box-shadow:
    0 6px 40px 0 rgba(120,180,255,0.15),
    0 2px 10px 0 rgba(80,120,200,0.13),
    0 0.5px 1.5px 0 rgba(30,60,150,0.07);

  display: flex; 
  flex-direction: column;
  align-items: center; 
  text-align: center;
  position: relative;
  margin-bottom: 2.5rem;

  h2 {
    font-size: 2.1rem;
    margin-bottom: 1.2rem;
    position: relative;
    font-weight: 700;
    letter-spacing: 0.03em;
    color: #21243d;
    text-shadow: 0 1.5px 6px rgba(100,140,220,0.07);
  }

  h2:after {
    content: "";
    display: block;
    margin: 0.5rem auto 0;
    width: 56px;
    height: 3px;
    border-radius: 3px;
    background: linear-gradient(90deg, #3a8dde 60%, #69d2e7 100%);
    opacity: 0.6;
  }
`;



export const AboutWrapper = styled.div`
  display:flex; 
  flex-wrap:wrap; 
  align-items:center;
  justify-content:center; 
  gap:8rem; 
  width:100%;
`;

export const ProfileImage = styled.img`
  width: 350px;
  height: 450px;
  border-radius:5%; 
  object-fit:cover;
`;

export const InfoList = styled.ul`
  list-style:none; 
  padding:0; 
  margin:0; 
  text-align:left;
`;

export const InfoItem = styled.li`
  display:flex; 
  align-items:center; 
  gap:.75rem;
  font-size:1.1rem; 
  color:#333; 
  margin-bottom:.5rem;
  svg{ flex-shrink:0; }
`;

export const SocialLinks = styled.div`
  display:flex; 
  gap:1.5rem; 
  margin-top:1rem;

  a {
    display:flex; 
    align-items:center; 
    gap:.5rem;
    color:#333; 
    font-weight:bold; 
    text-decoration:none;
    transition:color .3s;
    svg{ font-size:1.2rem; }
    &:hover{ color:#007bff; }
  }
`;

export const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:1.5rem;
  width:100%;
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  .skill-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.3rem;
    width: 100%;
  }

  .icon-name-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 82px;
  }
  .skill-icon {
    font-size: 2.3rem;
  }
  .skill-name {
    margin-top: 7px;
    font-size: 1.05rem;
    font-weight: 500;
    color: #232323;
  }
  .skill-desc {
    font-size: 1rem;
    color: #444;
    text-align: left;
    line-height: 1.5;
    flex: 1;
    word-break: keep-all;
  }
`;
