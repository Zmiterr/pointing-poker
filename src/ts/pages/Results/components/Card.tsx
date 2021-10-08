/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { ReactSVG } from 'react-svg';

import AddCardIcon from '../../../../assets/icons/add-card.svg';
import CoffeeBreakIcon from '../../../../assets/icons/coffee-break.svg';
import EditIcon from '../../../../assets/icons/edit.svg';
import '../../Lobby/styles/card.scss';

interface ICardProps {
  score: number;
  type?: string;
  isSelected?: boolean;
  onAdded?: (scoreValue: number, type: string) => void;
  onSelected?: (scoreValue: number, type: string) => void;
}

const CoffeBreakCard: React.FC = (): JSX.Element => {
  return (
    <div className="card">
      <div className="card__score up">Unknown</div>
      <div className="card__score down">Unknown</div>
      <ReactSVG
        className="card__icon break"
        src={(CoffeeBreakIcon || '').replace(/^\.\//, '/')}
        beforeInjection={(svg) => {
          svg.setAttribute('style', 'width: 100px');
          svg.setAttribute('style', 'height: 100px');
        }}
      />
      <ReactSVG
        className="card__edit-icon"
        src={(EditIcon || '').replace(/^\.\//, '/')}
        beforeInjection={(svg) => {
          svg.setAttribute('style', 'width: 20px');
          svg.setAttribute('style', 'height: 20px');
        }}
      />
    </div>
  );
};

const AddCard: React.FC<ICardProps> = (props: ICardProps): JSX.Element => {
  const { onAdded } = props;
  return (
    <div
      role="button"
      tabIndex={0}
      id="card"
      className="card"
      onKeyDown={() => {}}
      onClick={() => {
        const scoreValue = Math.floor(Math.random() * 10);
        if (onAdded) onAdded(scoreValue, 'SP');
      }}
    >
      <ReactSVG
        className="card__icon add"
        src={(AddCardIcon || '').replace(/^\.\//, '/')}
        beforeInjection={(svg) => {
          svg.setAttribute('style', 'width: 100px');
          svg.setAttribute('style', 'height: 100px');
        }}
      />
    </div>
  );
};

const Card: React.FC<ICardProps> = (props: ICardProps): JSX.Element => {
  const { score, type, isSelected, onSelected } = props;
  return (
    <div
      role="button"
      tabIndex={0}
      id="card"
      className={`card ${isSelected ? 'active' : ''}`}
      onKeyDown={() => {}}
      onClick={() => {
        if (onSelected) onSelected(score, 'SP');
      }}
    >
      <div className="card__score up">{score}</div>
      <div className="card__score down">{score}</div>
      <div className="card__score-type">{type}</div>
      <ReactSVG
        className="card__edit-icon"
        src={(EditIcon || '').replace(/^\.\//, '/')}
        beforeInjection={(svg) => {
          svg.setAttribute('style', 'width: 20px');
          svg.setAttribute('style', 'height: 20px');
        }}
      />
    </div>
  );
};

Card.defaultProps = {
  isSelected: false,
  type: 'SP',
  onAdded: () => {},
  onSelected: () => {},
};

AddCard.defaultProps = {
  isSelected: false,
  type: 'SP',
  onAdded: () => {},
  onSelected: () => {},
};

export { Card, CoffeBreakCard, AddCard };
