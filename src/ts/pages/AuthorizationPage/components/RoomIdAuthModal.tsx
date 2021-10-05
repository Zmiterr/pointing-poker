/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import '../styles/modalPopUp.scss';
import RoomIdForm from './RoomIdForm';

interface IRoomIdModalProp {
  onRoomIdClick: () => void;
}

export const authUser = {
  roomId: '',
  firstName: 'Don',
  lastName: 'Anton',
  jobPosition: '',
  image: '',
  isObserver: false,
};

const RoomIdAuthModal: FC<IRoomIdModalProp> = ({ children }) => {
  return ReactDOM.createPortal(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <>
      <RoomIdForm>{children}</RoomIdForm>
    </>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('modal-root')!,
  );
};

export default RoomIdAuthModal;
