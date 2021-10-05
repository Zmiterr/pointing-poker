import React, { FC, ReactNode } from 'react';
import AuthorizationModal from './Modal';

export interface IAuthorizationWrapperProps {
  isAuthorizationModalVisible?: boolean;
  onBackDropClick: () => void;
  content: ReactNode;
}

const AuthorizationModalWrapper: FC<IAuthorizationWrapperProps> = ({
  // eslint-disable-next-line react/prop-types
  onBackDropClick,
  // eslint-disable-next-line react/prop-types
  isAuthorizationModalVisible,
}) => {
  if (!isAuthorizationModalVisible) return null;
  return (
    <>
      <AuthorizationModal onBackDropClick={onBackDropClick} />
    </>
  );
};

export default AuthorizationModalWrapper;
