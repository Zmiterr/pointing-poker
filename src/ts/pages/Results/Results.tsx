/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import type { IIssue } from '../../interfaces/IIssue';

import Title from './components/Title';
import IssueCard from './components/IssueCard';
import { Card, CoffeBreakCard } from './components/Card';
import { getIssues, removeIssue } from '../../store/modules/issues/actionCreators';

import 'antd/dist/antd.css';
import '../Lobby/styles/index.scss';

interface IResultPageProps {
  title: string;
  issues: IIssue[];
}

const ResultPage: React.FC<IResultPageProps> = (props: IResultPageProps): JSX.Element => {
  const { title, issues } = props;

  return (
    <section className="lobby">
      <Title title={title} editable />

      <div className="lobby__section">
        <Title title="Results:" />
        <div className="lobby__section-wrapper issue-cards">
          {issues?.map((issue: IIssue) => (
            <IssueCard key={issue?.name} issue={issue} />
          ))}
          <IssueCard title="Issue 1" />
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
