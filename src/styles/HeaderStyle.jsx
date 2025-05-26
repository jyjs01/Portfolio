import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed; 
  top: 0; 
  left: 0;
  width: 100%; 
  padding: 20px 5rem;

  background: ${({scrolled}) =>
    scrolled
      ? 'rgba(255,255,255,0.88)'
      : 'none'
  };
  backdrop-filter: ${({scrolled}) => scrolled ? 'blur(10px)' : 'none'};
  color: ${({scrolled}) => scrolled ? '#222c44' : '#2ba8ec'};
  box-shadow: ${({scrolled}) => scrolled ? '0 2px 14px 0 rgba(70, 110, 180, 0.07)' : 'none'};

  display: flex; 
  justify-content: space-between; 
  align-items: center;
  z-index: 100; 
  transition: all .3s cubic-bezier(0.77,0,0.18,1);

  @media (max-width: 768px) {
    flex-direction: column; 
    padding: 15px 20px;
    background: ${({scrolled}) => scrolled ? 'rgba(255,255,255,0.95)' : 'none'};
  }
`;



export const Title = styled.h1`
  font-size: 2.3rem; 
  color: inherit; 
  margin: 0;
  letter-spacing: 1px;
  font-weight: bold;
  text-shadow: 0 1px 8px rgba(190,210,255,0.07);
`;

export const Nav = styled.nav`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center;

  a {
    margin: 0 2rem; 
    color: inherit;
    text-decoration: none; 
    font-size: 1.08rem; 
    font-weight: 700;
    letter-spacing: 0.02em;
    transition: color .3s; 
    cursor: pointer;
    text-shadow: 0 1px 7px rgba(190,210,255,0.07);
    position: relative;
  }
  a:after {
    content: "";
    display: block;
    margin: 0.23rem auto 0;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg,#7fd6f5 0%, #51beed 100%);
    border-radius: 2px;
    transition: width .35s cubic-bezier(0.77,0,0.18,1);
  }
  a:hover {
    color: #2ba8ec;
  }
  a:hover:after {
    width: 80%;
  }
`;
