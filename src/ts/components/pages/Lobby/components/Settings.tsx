import React from 'react';
import { Switch, Input } from 'antd';

import Line from './Line';
import '../styles/settings.scss';

const Settings: React.FC = (): JSX.Element => {
  return (
    <div className="lobby__settings">
      <Line
        title="Scrum master as a player:"
        value={<Switch defaultChecked onChange={() => {}} />}
      />
      <Line
        title="Changing card in round end:"
        value={<Switch defaultChecked onChange={() => {}} />}
      />
      <Line title="Is timer needed:" value={<Switch defaultChecked onChange={() => {}} />} />
      <Line
        title="Score type:"
        value={<Input className="lobby__settings-item-line-value" placeholder="Score type" />}
      />
      <Line
        title="Score type (Short):"
        value={
          <Input className="lobby__settings-item-line-value" placeholder="Score type (short)" />
        }
      />
      <Line title="Round time:" />
    </div>
  );
};

export default Settings;
