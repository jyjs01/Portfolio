import { HeaderWrapper, Title, Nav } from '../styles/HeaderStyle';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderWrapper scrolled={scrolled}>
      <Title>JY's Portfolio</Title>
      <Nav>
        <a onClick={() => scrollTo('home')}>Home</a>
        <a onClick={() => scrollTo('about')}>About</a>
        <a onClick={() => scrollTo('projects')}>Projects</a>
        <a onClick={() => scrollTo('skills')}>Skills</a>
        <a onClick={() => scrollTo('contact')}>Contact</a>
      </Nav>
    </HeaderWrapper>
  );
}