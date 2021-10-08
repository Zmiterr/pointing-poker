/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';

import { ReactSVG } from 'react-svg';
import Results from '../../pages/Results/Results';
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
      <div className="please">
        <p>Привет. В условиях неполной команды работа пошла неочень</p>
        <p>Поэтому просьба пока не проверять работу, может к дедлайну доделаем хоть что-то</p>
        <p>
          Сейчас на фронте из интерактивного только открывающееся окно с модалкой и добавление карт
        </p>
        <p>
          Серверная часть готова и поддерживает несколько пользователей, но как её бех фронта
          проверить?
        </p>
        <p>Надеюсь на понимание, заранее спасибо))</p>
        <p>С уважением, Дима Р. (Мой дискорд, на всякий случай: Zmiter#0480)</p>
      </div>
      <Main />
      <PagewWrapper>
        <LobbyPage currentUser={user} title={title} members={members} />
        <Results title={title} />
      </PagewWrapper>

      <div className="app__footer" />
    </div>
  );
};

export default App;
