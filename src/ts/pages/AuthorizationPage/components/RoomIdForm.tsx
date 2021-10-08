/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC, useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import '../styles/modalPopUp.scss';
import CloseBtnFormId from './CloseBtnFormId';

const RoomIdForm: FC = () => {
  const [isFormIdOpened, setIsFormIdOpened] = useState<boolean>(true);

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onEnter = async (values: any) => {
    const { firstName, lastName } = values;
    await axios.post('/rooms', {
      roomId: '',
      name: `${firstName}${lastName ? ` ${lastName}` : ''}`,
    });
  };

  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  const wrapperIdForm = (
    <div className="authorization-modal-wrapper">
      <div className="authorization-modal-wrapper_form">
        <CloseBtnFormId
          isFormIdOpened={!isFormIdOpened}
          updateRoomIdForm={() => setIsFormIdOpened(!isFormIdOpened)}
        />
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          className="modal-styles"
          onClick={(e) => e.stopPropagation()}
          onFinish={onEnter}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Firstname"
            name="firstName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className="modal-input" />
          </Form.Item>
          <Form.Item label="Room ID" name="roomId">
            <Input className="modal-input" value="roomId" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
  return isFormIdOpened ? wrapperIdForm : null;
};

export default RoomIdForm;
