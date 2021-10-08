/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';

export interface IProts {
  isOpened: boolean;
  updateModal: () => void;
}

// eslint-disable-next-line react/prop-types
const CloseBtn: FC<IProts> = ({ updateModal, isOpened }: any) => {
  // eslint-disable-next-line no-return-assign
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="closeButton" onClick={() => updateModal(isOpened)}>
      <div className="closeSign" />
    </div>
  );
};

export default CloseBtn;
