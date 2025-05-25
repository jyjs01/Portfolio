import styled from 'styled-components';

export const Card = styled.div`
  background:#fff; 
  border-radius:10px;
  box-shadow:0 5px 15px rgba(0,0,0,0.1);
  overflow:hidden; 
  transition:transform .3s,box-shadow .3s;
  max-width:350px; 
  width:100%; margin:0 auto;

  &:hover {
    transform: translateY(-10px);
    box-shadow:0 10px 20px rgba(0,0,0,0.2);
  }

  img { 
    width:100%; 
    height:auto; 
    display:block; 
  }
    
  .content { padding:1rem; }
`;
