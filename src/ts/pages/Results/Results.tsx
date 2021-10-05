/* eslint-disable react/jsx-max-props-per-line */
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
import '../Lobby/styles/index.scss';

interface IResultPageProps {
  title: string;
  issues: IIssue[];
}

const ResultPage: React.FC<IResultPageProps> = (props: IResultPageProps): JSX.Element => {
  const { title, issues } = props;
  const { Search } = Input;

  const [selectedCards, setSelectedCards] = useState<any[]>([]);

  return (
    <section className="lobby">
      <Title title={title} editable />

      <div className="lobby__section">
        <Title title="Issues:" />
        <div className="lobby__section-wrapper issue-cards">
          {issues?.map((issue: IIssue) => (
            <IssueCard key={issue?.name} issue={issue} />
          ))}
          <IssueCard title="Create new Issue" />
        </div>
      </div>

      <div className="lobby__section">
        <Title title="Add card values:" />
        <div className="lobby__section-wrapper cards">
          <CoffeBreakCard />
          <Card key={Math.random()} type="SP" score={5} isSelected={false} />
          <Card key={Math.random()} type="SP" score={10} isSelected={false} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => ({ issues: state.issues });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllIssues: getIssues(dispatch),
  onRemovedIssue: (id: number) => removeIssue(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
