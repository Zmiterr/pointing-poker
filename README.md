
## :flower_playing_cards: [Pointing-Poker](https://pointing-pocker-rss.netlify.app) :flower_playing_cards:
It is an application for conducting sessions to assess the complexity of the work ahead or the relative volume of tasks to be solved in software development.


> ## Built with
> ### Frontend
> <img alt="" width="20" height="20" src="https://camo.githubusercontent.com/b0c01c651350ad593a116259c5fe35b118f895a0c7bee0b1c0dc0c79a024b02f/68747470733a2f2f72656163746a732e6f72672f66617669636f6e2e69636f"> [React 17](https://reactjs.org/) - Web Framework  
<img alt="" width="20" height="20"  src="https://camo.githubusercontent.com/aa7c752a028133f5d0222ddebae1f925c26ecc999e3f1e0689a04b0cbeb94ded/68747470733a2f2f72656475782e6a732e6f72672f696d672f66617669636f6e2f66617669636f6e2e69636f"> [Redux](https://reactjs.org/) - State Container Management  
<img alt="" width="20" height="20" src="https://camo.githubusercontent.com/8fd0e8b01587de590017c247195d5b4a8fd33bb53fc6cd71fc40689fbd2d7b57/68747470733a2f2f7777772e747970657363726970746c616e672e6f72672f66617669636f6e2d33327833322e706e67"> [TypeScript](https://www.typescriptlang.org/) - Language syntax and compiler  
<img alt="" width="20" height="20" src="https://user-images.githubusercontent.com/10351028/137503047-758be968-dead-471b-b972-0d32910e6fa8.png"> [Ant design](https://ant.design/) - Web Layouting  
<img alt="" width="20" height="20" src="https://user-images.githubusercontent.com/10351028/137503210-08f6c4bb-ec6b-4c11-9418-ebe80d724412.png"> [Post CSS](https://postcss.org/) - CSS post-processor  
<img alt="" width="20" height="20" src="https://camo.githubusercontent.com/88be413edda17e269ad9fc210218a5640e09f6f6b5f25b5fe84093c26501cdd3/68747470733a2f2f7765627061636b2e6a732e6f72672f69636f6e5f313932783139322e706e67"> [Webpack 5](https://webpack.js.org/) - Project bundler  
<img alt="" width="20" height="20" src="https://user-images.githubusercontent.com/31656183/136399478-f6182c75-065e-4f68-8f51-ee221e26197a.png"> [ESLint](https://eslint.org/) - Pluggable JavaScript linter
> 
> ### Backend
> <img alt="" width="20" height="20" src="https://user-images.githubusercontent.com/31656183/136397127-058f92f2-5b1b-4d1d-a280-148fc10f30e6.png"> [NodeJS](https://nodejs.org/en/) - Node.js  
<img alt="" width="20" height="20" src="https://user-images.githubusercontent.com/31656183/136397711-7e00ffbe-e26b-4ff2-88f5-26c92ad7c7d6.png"> [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js   
<img alt="" width="20" height="20" src="https://user-images.githubusercontent.com/31656183/136398151-2f1181fd-f582-4d92-aad4-94cbdca4aa0e.png"> [Socket.IO](https://socket.io/) - Bidirectional and low-latency communication for every platform
> 
> ### Testing
> <img alt="" width="20" height="20" src="https://user-images.githubusercontent.com/31656183/136400240-f098f011-624f-4bfd-b3d4-541e951bf249.png"> [Jest](https://jestjs.io/) - Delightful JavaScript Testing Framework with a focus on simplicity
> 
> <img alt="" width="20" height="20" src="https://user-images.githubusercontent.com/10351028/137503499-625f05c5-5131-4bb1-aabe-fb6f2de6e33a.png"> [Enzume](https://airbnb.io/) - JavaScript Testing utility for React
> 
> ### Deploy
> <img alt="" width="20" height="20" src="https://user-images.githubusercontent.com/10351028/137499777-b44bc207-3717-4301-8248-a8b3da47f215.png"> [Google cloud](https://console.cloud.google.com/) - Public cloud computing services 
<img alt="" width="20" height="20" src="https://user-images.githubusercontent.com/10351028/137504000-667f5573-1327-43ca-ae1a-f5f6438f7a91.png"> [Netlify](https://www.netlify.com/) - Web developer platform that multiplies productivity


## Начало разработки

#### Начало работы

```
git clone https://github.com/Zmiterr/pointing-poker.git
```

#### Симовол переноса (LF / CRLF)
Перенос строки по умолчанию LF. Если вы используете Windows нужно зайти в

```
./git/config
```
и убедится, что отключено авто исправление переноса (autocrlf)

```
[core]
    autocrlf = false
```
Также в WebStorm нужно зайти в ```Setting / Editor / Code Style``` и включить ```Line separator``` в положение ```Unix and macOS (\n)```.

Если к текущему моменту GIT все же успел исправить переносы во всех файлах, запустите ```nmp run js:fix```

#### Локальная разработка

Установите все зависимости
```
npm i
```

Поднимите локальный сервер для разработки
```
npm run start
```

Сайт станет доступен по адресу http://127.0.0.1:3000/

#### Проверка стиля для JS

```
npm run js:check
```

#### Исправление стиля для JS

```
npm run js:fix
```

## Разработка

### Структура проекта

```
- src
  |-- assets       // общие статические файлы
  |-- fonts        // общие шрифты
  |-- styles       // общие стили
  |-- ts             // код на TypeScript
      |-- helpers    // общие хэлперы
      |-- interfaces // общие TS-интерфейсы и TS-типы
      |-- components // общие компоненты
          |-- app
              |-- App.tsx       // логика компонента
              |-- index.scss   // стили компонента
              |-- index.tsx     // экспорт компонента (только export страницы без логики)
      |-- pages      // страницы или разделы сайта
          |-- PageName         // имя раздела
              |-- components   // компоненты раздела
                  |-- Component.tsx // логика компонента
              |-- interfaces  // локальные TS-интерфейсы и TS-типы, если нужно
                  |-- IComponent.ts
              |-- styles      // стили для компонентов раздела, если их больше одного
                  |-- component.scss
              |-- helpers     // локальные хэлперы для компонентов раздела
              |-- api.ts      // все запросы к серверу для данного раздела
              |-- index.scss  // стили страницы, если их мало
              |-- index.tsx   // сборка страницы из компонентов и экспорт

```

### F.A.Q.

### WebStorm не понимает пути от корня (cannot resolve directory)

Открываем ```File > Settings > Directories``` нажимаем в дереве на ```src``` и ставим метку ```Resource Root```

### Как настроить авто-форматирование кода в WebStorm?

Устанавливаем плагин ```JavaScript and TypeScript```. Открываем ```Setting > Keymap > Plugins > JavaScript and TypeScript > Fix ESLint Problems``` двойным кликом на ```Fix ESLint Problems``` назначаем комбинацию (например ```Ctrl + Alt + ;```).

### Как настроить авто-форматирование кода в VSCode?

Устанавливаем плагин ```ESLint```. Открываем ```Setting > Workspace > Extensions > ESLint```. Включаем галочки про "включить". Возможно перезагружаем VSCode (а может и так заработает). Используем комбинацию ```Alt + Shift + F``` для форматирования кода.
