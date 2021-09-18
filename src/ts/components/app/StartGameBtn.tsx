/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';

// eslint-disable-next-line react/prop-types
export const StartGameBtn: FC = () => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <button className="button-modal" type="button">
      Start New Game
    </button>
  );
};

export default StartGameBtn;
