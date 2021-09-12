import React, { FC, MouseEventHandler, ReactNode } from 'react';
// import './modalPopUp.scss';
import { CloseSign, Message } from './AuthorizationModalPopUp.styled';
import AuthorizationModal from './Modal';

export interface IAuthorizationWrapperProps {
  isAuthorizationModalVisible?: boolean;
  firstNameError?: string;
  onBackDropClick?: () => void;
  message?: string;
  content?: ReactNode;
}

interface IComponentsProps {
  ContainerComponent: React.ComponentType<{ any: any }>;
  CloseButtonComponent: React.ComponentType<{
    onClick?: MouseEventHandler<any>;
  }>;
}

type Props = IAuthorizationWrapperProps & IComponentsProps;

const AuthorizationModalWrapper: FC<Props> = ({
  // eslint-disable-next-line react/prop-types
  onBackDropClick,
  // eslint-disable-next-line react/prop-types
  isAuthorizationModalVisible,
  // eslint-disable-next-line react/prop-types
  message,
  // eslint-disable-next-line react/prop-types
  ContainerComponent,
  // eslint-disable-next-line react/prop-types
  CloseButtonComponent,
  // eslint-disable-next-line react/prop-types
  content,
  // eslint-disable-next-line react/prop-types
  firstNameError,
}) => {
  if (!isAuthorizationModalVisible) return null;
  return (
    <AuthorizationModal onBackDropClick={onBackDropClick}>
      <ContainerComponent onBackDropClick={onBackDropClick}>
        <CloseButtonComponent onClick={onBackDropClick}>
          <CloseSign />
        </CloseButtonComponent>
        {message && <Message>{message}</Message>}
        {content}
        {firstNameError}
      </ContainerComponent>
    </AuthorizationModal>
  );
};

export default AuthorizationModalWrapper;
