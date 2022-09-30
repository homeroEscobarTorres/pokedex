import styled from "styled-components";

export const Title = styled.h1`
  text-transform: uppercase;
  background: #ddd;
  padding: 0.8rem 2rem 0 2rem;
  font-weight: bold;
  border-radius: 1rem;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImagesContainer = styled.div`
  &:before {
    content: "";
    position: absolute;
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid white;
    border-radius: 0.5rem;
  }
  background: linear-gradient(
    to bottom,
    grey 0%,
    white 25%,
    white 75%,
    grey 100%
  );
  display: flex;
  align-items: center;
  position: relative;
  border: 3px solid #5c6267;
  box-shadow: 0 0 10px #ddd;
  border-radius: 0.5rem;
  flex: 1;
  margin: 3rem;
`;
