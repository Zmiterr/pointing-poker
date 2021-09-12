import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { DesktopCloseButton, DesktopModalContainer } from './AuthorizationModalPopUp.styled';
import AuthorizationModalWrapper, { IAuthorizationWrapperProps } from './AuthorizationModalWrapper';

type RWDModalProps = IAuthorizationWrapperProps;

const RWDModal: FC<RWDModalProps> = (props) => {
  return (
    <MediaQuery minWidth={580}>
      {(matches: any) =>
        matches ? (
          <AuthorizationModalWrapper
            CloseButtonComponent={DesktopCloseButton}
            ContainerComponent={DesktopModalContainer}
            // firstNameError={firstNameError}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          />
        ) : (
          <div>SFFH</div>
        )
      }
    </MediaQuery>
  );
};

export default RWDModal;
