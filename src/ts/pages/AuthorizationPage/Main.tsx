import React, { FC, useState } from 'react';
import { Space, Button, Form, Input } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import RWDModal from './components/RWDModal';
import IDModal from './components/IDModal';
import '../../../styles/index.scss';
import gameLogo from '../../../assets/icons/logo.jpg';
import Overlay from './components/Overlay';
import RoomIdForm from './components/RoomIdForm';

const Main: FC = () => {
  const [authorizationModal, setAuthorizationModal] = useState<boolean>(false);
  const [isFormIdOpened, setIsFormIdOpened] = useState<boolean>(false);

  const toogleAuthorizationModal = () => {
    setAuthorizationModal((authorizatonModalVisible) => !authorizatonModalVisible);
  };

  const toogleFormIdModal = () => {
    setIsFormIdOpened((RoomIdVisible) => !RoomIdVisible);
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
          </div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <Form.Item name="url" rules={[{ required: true }, { type: 'string', min: 6 }]}>
            <Input />
          </Form.Item>
        </div>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="button" onClick={toogleFormIdModal}>
              Submit
            </Button>
          </Space>
        </Form.Item>
        <RWDModal
          content={<Overlay />}
          isAuthorizationModalVisible={authorizationModal}
          onBackDropClick={toogleAuthorizationModal}
        />
        <IDModal
          content={<RoomIdForm />}
          isRoomIdVisible={isFormIdOpened}
          onRoomIdClick={toogleFormIdModal}
        />
      </div>
    </BrowserRouter>
  );
};

export default Main;
