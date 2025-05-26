import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed; 
  left: 0; 
  top: 0; 
  width: 100vw; 
  height: 100vh;
  background: rgba(0,0,0,0.4); 
  z-index: 1000;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

export const ModalBox = styled.div`
  background: #fff; 
  padding: 2rem; 
  border-radius: 15px;
  max-width: 90vw; 
  overflow-x: auto;
  max-height: 90vh;
  max-height: 90dvh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  position: relative;

  .image {
    width: 100%;
    max-width: 480px;
    max-height: 480px;
    object-fit: contain;
    margin: 0 auto;
    display: block;
    border-radius: 8px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute; 
  right: 1rem; 
  top: 1rem; 
  background: none; 
  border: none;
  font-size: 1.6rem; 
  cursor: pointer; 
  color: #888;
`;