import React, { FC, ReactNode } from 'react';
import RoomIdAuthModal from './RoomIdAuthModal';

export interface IAuthorizationWrapperProps {
  isRoomIdVisible: boolean;
  onRoomIdClick: () => void;
  content: ReactNode;
}

const RoomIdModalWrapper: FC<IAuthorizationWrapperProps> = ({
  // eslint-disable-next-line react/prop-types
  onRoomIdClick,
  // eslint-disable-next-line react/prop-types
  isRoomIdVisible,
}) => {
  if (!isRoomIdVisible) return null;
  return (
    <>
      <RoomIdAuthModal onRoomIdClick={onRoomIdClick} />
    </>
  );
};

export default RoomIdModalWrapper;
