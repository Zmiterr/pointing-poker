import React, { FC, ReactNode } from 'react';
import AuthorizationModalWrapper from './AuthorizationModalWrapper';

export interface IProps {
  isAuthorizationModalVisible?: boolean;
  onBackDropClick: () => void;
  content: ReactNode;
}

const RWDModal: FC<IProps> = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AuthorizationModalWrapper {...props} />;
};
export default RWDModal;
