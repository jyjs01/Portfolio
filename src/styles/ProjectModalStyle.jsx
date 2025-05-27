import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed; 
  left: 0; 
  top: 0; 
  width: 100vw; 
  height: 100vh;
  background: rgba(20, 34, 68, 0.26);  /* 더 깊고 세련된 어두운 투명 레이어 */
  z-index: 1000;
  display: flex; 
  align-items: center; 
  justify-content: center;
  backdrop-filter: blur(2px); /* 배경 살짝 더 부드럽게 */
`;

export const ModalBox = styled.div`
  background:
    url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='2' cy='2' r='2' fill='%23b6a4fd' fill-opacity='0.10'/%3E%3Ccircle cx='38' cy='38' r='2' fill='%2366a6ff' fill-opacity='0.10'/%3E%3C/svg%3E")
    repeat,
    rgba(255,255,255,1);
  backdrop-filter: blur(24px) saturate(120%);
  border-radius: 20px;
  box-shadow:
    0 12px 50px 0 rgba(80,130,220,0.19),
    0 2.5px 10px 0 rgba(40,40,60,0.10);
  position: relative;

  padding: 2.3rem 2rem 2rem 2rem;
  max-width: 92vw;
  max-height: 92vh;
  overflow-y: auto;
  animation: modalPop 0.24s cubic-bezier(0.7,1.6,0.36,0.8);

  @keyframes modalPop {
    0%   { transform: scale(0.95) translateY(40px); opacity: 0; }
    100% { transform: scale(1) translateY(0);      opacity: 1; }
  }

  @media (max-width: 600px) {
    padding: 1rem 0.3rem 1.3rem 0.3rem;
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 12px;
  }

  .image {
    background: #f4f6fa;
    min-width: 460px;
    min-height: 360px;
    max-width: 460px;
    max-height: 360px;
    object-fit: contain;
    margin: 0 auto 1rem auto;
    display: block;

     @media (max-width: 600px) {
      min-width: 0;
      min-height: 0;
      max-width: 95vw;
      max-height: 35vh;
    }
  }

  h2 {
    margin: 1rem 0 0.5rem 0;
    font-size: 1.38rem;
    font-weight: bold;
    color: #262c4d;
    letter-spacing: 0.02em;
    text-shadow: 0 1px 6px rgba(90,150,255,0.06);
  }

  strong {
    color: #4195ed;
    font-weight: bold;
  }

  a {
    color: #3499fa;
    font-weight: 600;
    text-decoration: underline;
    transition: color 0.25s;
  }
  a:hover {
    color: #7f95f9;
  }
`;

export const CloseBtn = styled.button`
  position: absolute; 
  right: 1.3rem; 
  top: 1.1rem; 
  background: rgba(245,250,255,0.63); 
  border: none;
  border-radius: 43%;
  width: 40px; height: 40px;
  font-size: 1.75rem; 
  box-shadow: 0 1px 6px 0 rgba(140,170,210,0.13);
  cursor: pointer; 
  color: #6a6a8a;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.22s, color 0.22s, box-shadow 0.22s;
  &:hover {
    background: #e2eafe;
    color: #4195ed;
    box-shadow: 0 3px 18px 0 rgba(90,150,255,0.12);
  }
`;
