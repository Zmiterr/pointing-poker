import React from 'react';
import { ReactSVG } from 'react-svg';

import type { IIssue } from '../../../interfaces/IIssue';

import EditIcon from '../../../../assets/icons/edit.svg';
import DeleteIcon from '../../../../assets/icons/delete.svg';
import AddIcon from '../../../../assets/icons/add.svg';
import '../styles/issue-card.scss';

interface IIssueCardProps {
  issue?: IIssue;
  title?: string;
}

const IssueCard: React.FC<IIssueCardProps> = (props: IIssueCardProps): JSX.Element | null => {
  const { issue, title } = props;
  const { name, priority } = issue || {};

  return (
    <div className="lobby__issue-card">
      <div className="lobby__issue-card-info-wrapper">
        <p className="lobby__issue-card-issue">{name || title}</p>
        <p className="lobby__issue-card-priority">{priority}</p>
      </div>
      {issue?.name ? (
        <div className="lobby__issue-card-icons-wrapper">
          <ReactSVG
            className="lobby__issue-card-icon"
            src={(EditIcon || '').replace(/^\.\//, '/')}
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px');
              svg.setAttribute('style', 'height: 24px');
            }}
          />
          <ReactSVG
            className="lobby__issue-card-icon"
            src={(DeleteIcon || '').replace(/^\.\//, '/')}
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 24px');
              svg.setAttribute('style', 'height: 24px');
            }}
          />
        </div>
      ) : (
        <ReactSVG
          className="lobby__issue-card-icon"
          src={(AddIcon || '').replace(/^\.\//, '/')}
          beforeInjection={(svg) => {
            svg.setAttribute('style', 'width: 24px');
            svg.setAttribute('style', 'height: 24px');
          }}
        />
      )}
    </div>
  );
};

IssueCard.defaultProps = {
  issue: {
    name: '',
    priority: '',
  },
  title: 'Issue',
};

export default IssueCard;
