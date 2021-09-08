import React, { FC } from 'react';
import './modalPopUp.scss';

interface IAuthorizationMessageProp {
  message?: string;
}

const AuthorizationMessage: FC<IAuthorizationMessageProp> = ({
  // eslint-disable-next-line react/prop-types
  message,
}) => {
  return (
    <div className="desktop-modal-container">{message && <p className="message">{message}</p>}</div>
  );
};

export default AuthorizationMessage;
