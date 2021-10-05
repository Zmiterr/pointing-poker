/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC, useState } from 'react';
import { Form, Input, Button, Checkbox, Space, Upload } from 'antd';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from 'ts/store/rootReducer';
// import { useDispatch, useSelector } from 'react-redux';
// import { authorizationSuceed } from '../../../store/modules/authorization/actionCreators';
import CloseBtn from './CloseBtn';
// eslint-disable-next-line import/no-named-as-default
// import AvatarUploader from './AvatarUpload';
import '../styles/modalPopUp.scss';

axios.defaults.baseURL = 'http://34.77.110.165/:5000/';

export interface IAuthorization {
  roomId: string;
  firstName: string;
  lastName: string;
  jobPosition: string;
  image?: string;
  isObserver: boolean;
}

export interface IAuthorizationPageProps {
  authorizationSet: any;
}

// eslint-disable-next-line react/prop-types
const Overlay: FC = () => {
  // const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState<boolean>(true);
  // const scrumValue = useSelector<RootState, boolean>((state) => state.reducer.scrumValue);
  // const firstNameValue = useSelector<RootState, string>(
  //   (state) => state.authorizationReducer.firstNameValue,
  // );
  // const lastNameValue = useSelector<RootState, string | null>(
  //   (state) => state.reducer.lastNameValue,
  // );
  // const jobPositionValue = useSelector<RootState, string>(
  //   (state) => state.reducer.jobPositionValue,
  // );
  // const imageValue = useSelector<RootState, string>((state) => state.reducer.imageValue);
  // const urlValue = useSelector<RootState, string>((state) => state.reducer.urlValue);
  // const onFinish = (values: any) => {
  //   // eslint-disable-next-line no-console
  //   console.log('Success:', values);
  // };

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
          onFinish={onEnter}
          onFinishFailed={onFinishFailed}
        >
          <Checkbox>Start as a Scrum Master</Checkbox>{' '}
          {/* в чекбокс нужно будет добавить onChange={onChange} */}
          <Form.Item
            label="Firstname"
            name="firstName"
            // value={firstName}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className="modal-input" />
          </Form.Item>
          <Form.Item label="Surname" name="lastName">
            <Input className="modal-input" value="lastName" />
          </Form.Item>
          <Form.Item label="Job position" name="jobPosition">
            <Input className="modal-input" />
          </Form.Item>
          <Form.Item id="mainApp">
            <Space direction="vertical" style={{ width: '100%' }} size="large">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                maxCount={1}
              >
                <Button className="ant-avatar-btn">Choose an avatar</Button>
              </Upload>
            </Space>
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
