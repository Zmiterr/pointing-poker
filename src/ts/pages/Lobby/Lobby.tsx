import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';

import type { IMember } from '../../interfaces/IMember';
import type { IIssue } from '../../interfaces/IIssue';

import Title from './components/Title';
import MemberCard from './components/MemberCard';
import IssueCard from './components/IssueCard';
import Settings from './components/Settings';
import { AddCard, Card, CoffeBreakCard } from './components/Card';
import { getIssues, removeIssue } from '../../store/modules/issues/actionCreators';

import 'antd/dist/antd.css';
import './styles/index.scss';

interface ILobbyPageProps {
  currentUser: any;
  title: string;
  members: IMember[];
  issues: IIssue[];
  getAllIssues: () => void;
  onRemovedIssue: (id: number) => void;
}

const LobbyPage: React.FC<ILobbyPageProps> = (props: ILobbyPageProps): JSX.Element => {
  const { currentUser, title, members, issues, getAllIssues, onRemovedIssue } = props;
  const { Search } = Input;

  const [addedCards, setAddedCards] = useState<any[]>([]);
  const [selectedCards, setSelectedCards] = useState<any[]>([]);

  useEffect(() => getAllIssues(), [getAllIssues]);

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
        <div className="lobby__section-wrapper members">
          {members?.map((member: IMember) => (
            <MemberCard key={member?.id} member={member} />
          ))}
        </div>
      </div>

      <div className="lobby__section">
        <Title title="Issues:" />
        <div className="lobby__section-wrapper issue-cards">
          {issues?.map((issue: IIssue) => (
            <IssueCard
              key={issue?.name}
              issue={issue}
              onRemovedIssue={(id: number) => onRemovedIssue(id)}
            />
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
        <div className="lobby__section-wrapper cards">
          <CoffeBreakCard />
          {addedCards.map((card: any) => (
            <Card
              key={Math.random()}
              type="SP"
              score={card.value}
              isSelected={card.isSelected}
              onSelected={(scoreValue: number, type = 'SP') => {
                setSelectedCards([...selectedCards, { value: scoreValue, type, isSelected: true }]);
              }}
            />
          ))}
          <AddCard
            score={0}
            onAdded={(scoreValue: number, type = 'SP') => {
              setAddedCards([...addedCards, { value: scoreValue, type, isSelected: false }]);
            }}
          />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => ({ issues: state.issuesReducer.issues });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllIssues: getIssues(dispatch),
  onRemovedIssue: (id: number) => removeIssue(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(LobbyPage);
