import React from 'react';
import { Button, Input } from 'antd';

import type { IMember } from '../../interfaces/IMember';
import type { IIssue } from '../../interfaces/IIssue';

import Title from './components/Title';
import MemberCard from './components/MemberCard';
import IssueCard from './components/IssueCard';
import Settings from './components/Settings';

import 'antd/dist/antd.css';
import './styles/index.scss';

interface ILobbyPageProps {
  currentUser: any;
  title: string;
  members: IMember[];
  issues: IIssue[];
}

const LobbyPage: React.FC<ILobbyPageProps> = (props: ILobbyPageProps): JSX.Element => {
  const { currentUser, title, members, issues } = props;
  const { Search } = Input;
  return (
    <section className="lobby">
      <Title title={title} editable />

      <div className="lobby__header">
        <span className="lobby__header-title">Scrum master:</span>
        <MemberCard member={currentUser} />
        <span className="lobby__header-title">Link to lobby:</span>
        <Search
          placeholder="input lobby link"
          className="lobby__header-search"
          allowClear
          enterButton="Copy"
          size="large"
          onSearch={() => {}}
        />
        <div className="lobby__header-buttons">
          <Button className="lobby__header-button" type="primary">
            Start Game
          </Button>
          <Button className="lobby__header-button" type="default">
            Cancel Game
          </Button>
        </div>
      </div>

      <div className="lobby__section">
        <Title title="Members:" />
        <div className="lobby__section-wrapper">
          {members?.map((member: IMember) => (
            <MemberCard key={member?.id} member={member} />
          ))}
        </div>
      </div>

      <div className="lobby__section">
        <Title title="Issues:" />
        <div className="lobby__section-wrapper">
          {issues?.map((issue: IIssue) => (
            <IssueCard key={issue?.name} issue={issue} />
          ))}
          <IssueCard title="Create new Issue" />
        </div>
      </div>

      <div className="lobby__section">
        <Title title="Game Settings:" />
        <Settings />
      </div>

      <div className="lobby__section">
        <Title title="Add card values:" />
      </div>
    </section>
  );
};
export default LobbyPage;