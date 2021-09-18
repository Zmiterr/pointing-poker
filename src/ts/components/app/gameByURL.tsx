import React, { FC } from 'react';
import { Form, Input, Button, Space } from 'antd';
import './index.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Demo: FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    // eslint-disable-next-line no-alert
    alert('Submit success!');
  };

  const onFinishFailed = () => {
    // eslint-disable-next-line no-alert
    alert('Submit failed!');
  };

  return (
    <Form
      form={form}
      layout="vertical"
      autoComplete="off"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
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
  );
};

export default Demo;
