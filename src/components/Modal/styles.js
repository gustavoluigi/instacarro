import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  animation-name: modalFade;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;

  @keyframes modalFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  > div {
    max-width: 600px;
    width: 100%;
    z-index: 9;
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    color: #323232;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  position: absolute;
  right: 10px;
  top: 10px;
  color: #ff6d4a;
  border: 0;
  outline: 0;
  font-weight: 900;
  font-size: 1.25rem;
  cursor: pointer;
`;
