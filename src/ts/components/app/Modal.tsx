/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Form, Overlay } from './AuthorizationModalPopUp.styled';
import './modalPopUp.scss';

interface IAuthorizationProps {
  onBackDropClick?: () => void;
}

const AuthorizationModal: FC<IAuthorizationProps> = ({ onBackDropClick, children }) => {
  return ReactDOM.createPortal(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <Overlay onClick={onBackDropClick}>
      <Form onClick={(e) => e.stopPropagation()}>{children}</Form>
    </Overlay>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('modal-root')!,
  );
};

export default AuthorizationModal;
