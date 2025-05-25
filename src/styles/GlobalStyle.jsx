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

  /* 스트라이프 오버레이 애니메이션 */
  @keyframes drift {
    to { background-position: 1000px 1000px; }
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

    /* 파스텔 톤 그라디언트: 연보라→하늘→민트→연핑크 */
    background: linear-gradient(
      -45deg,
      #e6e6fa,
      #e0ffff,
      #f0fff0,
      #ffe6f0
    );
    background-size: 400% 400%;
    animation: floatGradient 15s ease infinite;
  }

  /* 섬세한 화이트 스트라이프 오버레이 */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;

    background-image: repeating-linear-gradient(
      45deg,
      rgba(255,255,255,0.08) 0,
      rgba(255,255,255,0.08) 2px,
      transparent 2px,
      transparent 8px
    );
    background-size: 40px 40px;
    animation: drift 40s linear infinite;
  }
`;

export default GlobalStyle;
