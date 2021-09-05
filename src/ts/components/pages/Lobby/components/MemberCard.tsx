import React from 'react';
import { ReactSVG } from 'react-svg';
import { Avatar } from 'antd';

import type { IMember } from '../../../../interfaces/IMember';
import CloseIcon from '../../../../../assets/icons/close.svg';
import '../styles/member-card.scss';

interface IMemberCardProps {
  member: IMember;
}

const MemberCard: React.FC<IMemberCardProps> = (props: IMemberCardProps): JSX.Element | null => {
  const { member } = props;
  if (!member) return null;

  const { isMaster, avatar, name, position } = member;

  return (
    <div className="lobby__member-card">
      <div className="lobby__member-card-avatar-wrapper">
        {avatar ? (
          <Avatar size="large">{avatar}</Avatar>
        ) : (
          <Avatar style={{ backgroundColor: '#60DABF', verticalAlign: 'middle' }} size="large">
            U
          </Avatar>
        )}
      </div>

      <div className="lobby__member-card-info-wrapper">
        {isMaster && <p className="lobby__member-card-name-owner">Its you</p>}
        <p className="lobby__member-card-name">{name}</p>
        <p className="lobby__member-card-position">{position}</p>
      </div>

      {!isMaster && (
        <ReactSVG
          className="lobby__member-card-icon"
          src={(CloseIcon || '').replace(/^\.\//, '/')}
        />
      )}
    </div>
  );
};

export default MemberCard;
