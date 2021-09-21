import React from 'react';
import '../styles/line.scss';

interface ILineProps {
  title?: string;
  value?: JSX.Element | null;
  className?: string;
}

const Line: React.FC<ILineProps> = (props: ILineProps): JSX.Element => {
  const { title, value, className } = props;
  return (
    <div key={title} className={`lobby__settings-item-line ${className}`}>
      <div className="lobby__settings-item-line-title">{title}</div>
      <div className="lobby__settings-item-line-value">{value}</div>
    </div>
  );
};

Line.defaultProps = {
  title: '',
  value: null,
  className: '',
};

export default Line;
