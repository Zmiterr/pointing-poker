/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';

export interface IFormIdProps {
  isFormIdOpened: boolean;
  updateRoomIdForm: () => void;
}

// eslint-disable-next-line react/prop-types
const CloseBtnFormId: FC<IFormIdProps> = ({ updateRoomIdForm, isFormIdOpened }: any) => {
  // eslint-disable-next-line no-return-assign
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="closeButton" onClick={() => updateRoomIdForm(isFormIdOpened)}>
      <div className="closeSign" />
    </div>
  );
};

export default CloseBtnFormId;
