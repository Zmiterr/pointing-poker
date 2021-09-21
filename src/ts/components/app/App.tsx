/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';

import { ReactSVG } from 'react-svg';
import Main from '../../pages/AuthorizationPage/Main';

import PagewWrapper from '../../pages/PageWrapper';
import LobbyPage from '../../pages/Lobby/Lobby';

import LogoIcon from '../../../assets/icons/logo.svg';
import './index.scss';

const title = 'Spring 23 planning';
const user = {
  id: 1,
  name: 'David Blane',
  position: 'Developer',
  avatar: '',
  isMaster: true,
};
const members = [
  {
    id: 1,
    name: 'David Blane',
    position: 'Developer',
    avatar: '',
    isMaster: true,
  },
];

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <div className="app__header">
        <div className="app__header-top" />
        <div className="app__header-bottom" />
        <ReactSVG className="app__header-logo" src={(LogoIcon || '').replace(/^\.\//, '/')} />
      </div>
      <Main />
      <PagewWrapper>
        <LobbyPage currentUser={user} title={title} members={members} />
      </PagewWrapper>
      <div className="app__footer" />
    </div>
  );
};

export default App;
