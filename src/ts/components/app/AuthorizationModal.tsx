import React, { FC } from 'react';
import RWDModal from './RWDModal';

interface IAuthorizationArgs {
  firstName: string;
  lastName: string;
  jobPosition: string;
}

export type AuthorizationFunction = (args: IAuthorizationArgs) => Promise<void>;

interface IAuthorizationModalProps {
  onBackDropClick?: () => void;
  isAuthorizationModalVisible: boolean;
  firstNameError?: string;
  onAuthorizationRequested?: AuthorizationFunction; // Каким образом будет произведена валидация
}

const AuthorizationModals: FC<IAuthorizationModalProps> = ({
  // eslint-disable-next-line react/prop-types
  onBackDropClick,
  // eslint-disable-next-line react/prop-types
  isAuthorizationModalVisible,
  // eslint-disable-next-line react/prop-types
  firstNameError,
  // onAuthorizationRequested,
}) => {
  return (
    <RWDModal
      isAuthorizationModalVisible={isAuthorizationModalVisible}
      message="please log in"
      content={
        <>
          <input />
          <input />
          <input />
          <button type="submit">Confirm</button>
          <button type="button">Cancel</button>
        </>
      }
      firstNameError={firstNameError}
      onBackDropClick={onBackDropClick}
    />
  );
};

export default AuthorizationModals;
