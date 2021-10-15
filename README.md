
## :flower_playing_cards: [Pointing-Poker](https://pointing-pocker-rss.netlify.app) :flower_playing_cards:
It is an application for conducting sessions to assess the complexity of the work ahead or the relative volume of tasks to be solved in software development.


### Package manager:
 * npm

### Version control:
 * git

### Code: 
 * create react app
 * React: dom, router-dom, scripts.
 * Typescript
 * Code was analyzed by ESlint and prettier. 

 ### Backend
 * Node.js
 * Express
 * Socket.IO
 ### Frontend
 * TypeScript
 * ReactJS
 * Redux
 * Ant Design
 * POST CSS

### Tests:
 * Testing library: react, jest, jest-dom, user-event.

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
