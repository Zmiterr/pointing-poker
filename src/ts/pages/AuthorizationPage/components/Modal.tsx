/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import Overlay from './Overlay';
import '../styles/modalPopUp.scss';

interface IModalProp {
  onBackDropClick: () => void;
}

export const authUser = {
  roomId: '',
  firstName: 'Don',
  lastName: 'Anton',
  jobPosition: '',
  image: '',
  isObserver: false,
};

const AuthorizationModal: FC<IModalProp> = ({ children }) => {
  return ReactDOM.createPortal(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <Overlay authorizationSet={authUser}>{children}</Overlay>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('modal-root')!,
  );
};

export default AuthorizationModal;
