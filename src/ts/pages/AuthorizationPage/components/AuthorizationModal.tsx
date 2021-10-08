import React, { FC, ReactNode } from 'react';
import RWDModal from './RWDModal';

interface IAuthorizationModalProps {
  onBackDropClick: () => void;
  isAuthorizationModalVisible: boolean;
  content: ReactNode;
}

// eslint-disable-next-line react/prop-types
const AuthorizationModals: FC<IAuthorizationModalProps> = ({ onBackDropClick, content }) => {
  return <RWDModal content={content} onBackDropClick={onBackDropClick} />;
};

export default AuthorizationModals;
