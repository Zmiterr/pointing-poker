import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  background-color: #2b3a67;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.5);
  padding: 40px;
  width: 450px;
  font-size: 1.8rem;
`;

const ModalContainer = styled.div`
  background-color: #2b3a67;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const DesktopModalContainer = styled(ModalContainer)`
  border-radius: 7px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.5);
  padding: 40px;
  width: 450px;
  position: relative;
  font-size: 26px;
`;

export const Message = styled.p`
  font-family: 'Montserrat';
  color: #aaa;
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 39px;
  text-align: center;
`;

export const CloseSign = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #323232;
  &:before,
  &:after {
    position: absolute;
    left: 19px;
    top: 10px;
    content: ' ';
    height: 20px;
    width: 4px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Error = styled.div`
  padding: 1rem 0;
  font-size: 0.85rem;
  color: #ff0;
`;

export const CloseButton = styled.div`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #c8c8c8;
  border-radius: 50%;
  cursor: pointer;

  & > * {
    opacity: 1;
  }

  &:hover > * {
    opacity: 0.6;
  }
`;

export const DesktopCloseButton = styled(CloseButton)`
  top: -1.25rem;
  left: calc(100% - 1.25rem);
`;
