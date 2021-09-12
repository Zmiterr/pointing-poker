import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import './index.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Demo = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log('Submit success!');
  };

  const onFinishFailed = () => {
    console.log('Submit failed!');
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
        <Form.Item
          name="url"
          rules={[
            { required: true },
            { type: 'url', warningOnly: true },
            { type: 'string', min: 6 },
          ]}
        >
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
