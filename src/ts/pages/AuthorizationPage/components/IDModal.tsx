import React, { FC, ReactNode } from 'react';
import RoomIdModalWrapper from './RoomIdModalWrapper';

export interface IRoomIdProps {
  isRoomIdVisible: boolean;
  onRoomIdClick: () => void;
  content: ReactNode;
}

const IDModal: FC<IRoomIdProps> = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <RoomIdModalWrapper {...props} />;
};
export default IDModal;
