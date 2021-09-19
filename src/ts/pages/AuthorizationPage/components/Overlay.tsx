/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import CloseBtn from './CloseBtn';
// eslint-disable-next-line import/no-named-as-default
import AvatarUploader from './AvatarUpload';
import '../styles/modalPopUp.scss';

export interface IOverlayProps {
  isOpened: boolean;
  updateModal: () => void;
}

// eslint-disable-next-line react/prop-types
const Overlay: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const onFinish = (values: any) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  const wrapper = (
    <div className="authorization-modal-wrapper">
      <div className="authorization-modal-wrapper_form">
        <CloseBtn isOpened={!isOpened} updateModal={() => setIsOpened(!isOpened)} />
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          className="modal-styles"
          onClick={(e) => e.stopPropagation()}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Checkbox>Start as a Scrum Master</Checkbox>{' '}
          {/* в чекбокс нужно будет добавить onChange={onChange} */}
          <Form.Item
            label="Firstname"
            name="firstname"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className="modal-input" />
          </Form.Item>
          <Form.Item label="Surname" name="surname">
            <Input className="modal-input" />
          </Form.Item>
          <Form.Item label="Job position" name="job position">
            <Input className="modal-input" />
          </Form.Item>
          <Form.Item id="mainApp">
            <AvatarUploader />
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
  return isOpened ? wrapper : null;
};

export default Overlay;
