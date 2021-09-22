/* eslint-disable react/jsx-max-props-per-line */
import React, { FC, useState } from 'react';
import { Space, Button, Form, Input } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import RWDModal from './components/RWDModal';
import '../../../styles/index.scss';
import gameLogo from '../../../assets/icons/logo.jpg';
import Overlay from './components/Overlay';

const Main: FC = () => {
  const [authorizationModal, setAuthorizationModal] = useState(false);
  const [form] = Form.useForm();

  const toogleAuthorizationModal = () => {
    setAuthorizationModal((authorizatonModalVisible) => !authorizatonModalVisible);
  };

  // const onFinish = () => {
  //   // eslint-disable-next-line no-alert
  //   alert('Submit success!');
  // };

  // const onFinishFailed = () => {
  //   // eslint-disable-next-line no-alert
  //   alert('Submit failed!');
  // };

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
        <Form form={form} layout="vertical" autoComplete="off" onClick={toogleAuthorizationModal}>
          <div style={{ overflow: 'hidden' }}>
            <Form.Item name="url" rules={[{ required: true }, { type: 'string', min: 6 }]}>
              <Input />
            </Form.Item>
          </div>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
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
