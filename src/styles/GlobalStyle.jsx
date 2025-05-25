// src/styles/GlobalStyle.jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* 부드러운 파스텔 그라디언트 애니메이션 */
  @keyframes floatGradient {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  body {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: #333;
    line-height: 1.6;

    /* 화이트 계열 그라디언트 배경 추가 */
    background: linear-gradient(
      135deg,
      rgba(240, 244, 250, 1) 0%,
      rgba(224, 232, 242, 1) 50%, 
      rgb(149, 174, 201) 100% 
    );
    background-size: 300% 300%;
    animation: floatGradient 4s ease infinite;
    
  }
`;

export default GlobalStyle;
