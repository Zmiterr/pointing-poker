import React from 'react';
import { ReactSVG } from 'react-svg';

import EditIcon from '../../../../assets/icons/edit.svg';
import '../styles/title.scss';

interface ITitleProps {
  title?: string;
  editable?: boolean;
}

const Title: React.FC<ITitleProps> = (props: ITitleProps): JSX.Element => {
  const { title, editable } = props;
  return (
    <div className="title__wrapper">
      <h1 className="title__text">{title}</h1>
      {editable && (
        <ReactSVG
          className="title__edit-icon"
          src={(EditIcon || '').replace(/^\.\//, '/')}
          beforeInjection={(svg) => {
            svg.setAttribute('style', 'width: 24px');
            svg.setAttribute('style', 'height: 24px');
          }}
        />
      )}
    </div>
  );
};

Title.defaultProps = {
  title: '',
  editable: false,
};

export default Title;
