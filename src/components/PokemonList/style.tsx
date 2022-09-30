import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const List = styled.div`
  margin: 1rem 0;
  border: 4px solid #374c2b;
  border-radius: 0.5rem;
  background: #e6f856;
  width: 100%;
  padding: 0.5rem;
  box-shadow: 0 0 20px #374c2b;
  overflow: auto;
  &::-webkit-scrollbar {
    background: none;
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
  }
  &::-webkit-scrollbar-track {
    background: #00000055;
    width: 50px;
  }
`;

interface ArrowProps {
  marginTop?: number;
  marginBottom?: number;
  reverse?: boolean;
}

export const Arrow = styled.div<ArrowProps>`
  background: black;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  width: 3rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover:before {
    background: #fe22de;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #db00bc;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    transform: scale(0.8);
  }

  ${({ marginTop }) => `margin-top: ${marginTop}rem;`}
  ${({ marginBottom }) => `margin-bottom: ${marginBottom}rem;`}
  ${({ reverse }) => reverse && "transform: rotate(180deg);"}
`;

export const Item = styled.div`
  padding: 1rem 0 0.4rem 1rem;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #ffffff88;
    border-radius: 0.1rem;
  }
`;
