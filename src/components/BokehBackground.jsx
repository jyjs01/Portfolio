import styled, { keyframes } from "styled-components";

const floatBokeh = keyframes`
  0% { transform: translateY(0) scale(1);}
  50% { transform: translateY(-40px) scale(1.1);}
  100% { transform: translateY(0) scale(1);}
`;

const BokehWrapper = styled.div`
  position: fixed;
  left: 0; top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const BokehCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity || 0.22};
  filter: blur(${({ blur }) => blur || 0}px);
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  left: ${({ left }) => left}vw;
  top: ${({ top }) => top}vh;
  animation: ${floatBokeh} ${({ duration }) => duration}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || 0}s;
`;

const bokehs = [
  // 다양한 크기, 색상, 위치, 투명도/블러를 적절히 배치
  { size: 110, left: 10, top: 18, color: "#b8e1ff", opacity: 0.17, blur: 12, duration: 9, delay: 0 },
  { size: 180, left: 60, top: 5, color: "#fad0c4", opacity: 0.12, blur: 16, duration: 10, delay: 2 },
  { size: 95, left: 27, top: 65, color: "#f0e6ff", opacity: 0.14, blur: 14, duration: 8, delay: 1 },
  { size: 140, left: 74, top: 73, color: "#c9e7ff", opacity: 0.12, blur: 18, duration: 11, delay: 0.5 },
  { size: 80, left: 47, top: 27, color: "#e9f5f9", opacity: 0.09, blur: 9, duration: 10, delay: 1.5 },
  { size: 120, left: 82, top: 40, color: "#ffc8ff", opacity: 0.11, blur: 14, duration: 13, delay: 0 },
  { size: 160, left: 35, top: 42, color: "#d6ffe8", opacity: 0.14, blur: 20, duration: 14, delay: 2 },
];

export default function BokehBackground() {
  return (
    <BokehWrapper>
      {bokehs.map((b, i) => (
        <BokehCircle key={i} {...b} />
      ))}
    </BokehWrapper>
  );
}
