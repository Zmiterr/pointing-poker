import React, { FC, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RWDModal from './RWDModal';
import '../../../styles/index.scss';
import gameLogo from './logo.jpg';
import Demo from './gameByURL';
import Overlay from './Overlay';

const Main: FC = () => {
  const [authorizationModal, setAuthorizationModal] = useState(false);

  const toogleAuthorizationModal = () => {
    setAuthorizationModal((authorizatonModalVisible) => !authorizatonModalVisible);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <img alt="" src={gameLogo} />
        <h3 className="start-planning">Start your planning</h3>
        <div className="text-button-group">
          <span className="new-game-text">Create new session:</span>
          <button className="button-modal" type="button" onClick={toogleAuthorizationModal}>
            Start New Game
          </button>
          <p className="or">OR</p>
          <div className="text-button-group">
            <span>Connect to lobby by URL:</span>
            <Demo />
          </div>
        </div>
        <RWDModal
          content={<Overlay />}
          isAuthorizationModalVisible={authorizationModal}
          onBackDropClick={toogleAuthorizationModal}
        />
      </div>
    </BrowserRouter>
  );
};

export default Main;
