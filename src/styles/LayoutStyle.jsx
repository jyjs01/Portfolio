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
  background-color: ${({bg})=>bg||'rgba(255,255,255,0.8)'};
  backdrop-filter: blur(10px); border-radius:12px;
  box-shadow:0 4px 20px rgba(0,0,0,0.1);
  display:flex; 
  flex-direction:column;
  align-items:center; 
  text-align:center;
`;

export const AboutWrapper = styled.div`
  display:flex; 
  flex-wrap:wrap; 
  align-items:center;
  justify-content:center; 
  gap:5rem; 
  width:100%;
`;

export const ProfileImage = styled.img`
  width:clamp(200px,30vw,300px);
  height:clamp(200px,30vw,350px);
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
