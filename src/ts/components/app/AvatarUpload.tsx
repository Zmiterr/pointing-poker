import React, { FC } from 'react';
import { Upload, Button, Space } from 'antd';

const AvatarUploader: FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        maxCount={1}
      >
        <Button className="ant-avatar-btn">Choose an avatar</Button>
      </Upload>
    </Space>
  );
};

export default AvatarUploader;
