import React, { useState } from 'react';
import AuthorizationModals, { AuthorizationFunction } from './AuthorizationModal';
import './index.scss';

function App(): JSX.Element {
  const [authorizationModal, setAuthorizationModal] = useState(false);

  const toogleAuthorizationModal = () => {
    setAuthorizationModal((authorizatonModalVisible) => !authorizatonModalVisible);
  };

  const onAuthorizationRequest: AuthorizationFunction = async ({ firstName }) => {
    console.log(firstName);
  };
  return (
    <div className="app">
      <button type="button" onClick={toogleAuthorizationModal}>
        Start Game
      </button>
      <AuthorizationModals
        firstNameError={authorizationModal}
        isAuthorizationModalVisible={authorizationModal}
        onBackDropClick={toogleAuthorizationModal}
        onAuthorizationRequested={onAuthorizationRequest}
      />
    </div>
  );
}

export default App;
