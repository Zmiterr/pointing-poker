import React, { ReactNode } from 'react';
import './index.scss';

interface IPageWrapperProps {
  children: ReactNode;
}

const PagewWrapper: React.FC<IPageWrapperProps> = (props: IPageWrapperProps): JSX.Element => {
  const { children } = props;
  return <div className="page-wrapper">{children}</div>;
};

export default PagewWrapper;
