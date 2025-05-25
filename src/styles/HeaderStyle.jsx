import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed; 
  top: 0; 
  left: 0;
  width: 100%; 
  padding: 20px 5rem;
  background-color: ${({scrolled}) => scrolled ? 'rgba(255,255,255,0.8)' : 'transparent'};
  backdrop-filter: ${({scrolled}) => scrolled ? 'blur(10px)' : 'none'};
  color: ${({scrolled}) => scrolled ? '#000' : '#1a1a1a'};
  box-shadow: ${({scrolled}) => scrolled ? '0 2px 6px rgba(0,0,0,0.1)' : 'none'};
  display: flex; 
  justify-content: 
  space-between; 
  align-items: center;
  z-index: 100; 
  transition: all .3s ease;

  @media (max-width: 768px) {
    flex-direction: column; 
    padding: 15px 20px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem; 
  color: inherit; 
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center;

  a {
    margin: 0 2rem; 
    color: inherit;
    text-decoration: none; 
    font-size: 1.2rem; 
    font-weight: bold;
    transition: color .3s; 
    cursor: pointer;
  }
  a:hover { color: #39FF14; }
`;
