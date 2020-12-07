# ReDota

![Node Version](https://badgen.net/badge/node/14+/green)

Revisit past Dota 2 matches in the browser.

View live: https://timkurvers.github.io/redota

![ReDota](./public/images/redota.jpg)

# Background

This is an experiment to revisit past Dota 2 matches in the browser, fully relying
on parsing replays client-side without any server involvement.

ReDota is a heavily derived project and stands on the shoulders of giants,
notably parsers by [Dotabuff], [OpenDota] and [Skadistats].

# Status

Currently, ReDota is capable of parsing replays and playing back in real time.
It does not yet parse everything correctly though.

Contributions in form of issues, feedback or pull requests more than welcome!

# Legalese

- Dota 2 is a registered trademark of [Valve Corporation].
- Image resources, lore and other references are property of [Valve Corporation].
- The Dota 2 map background originates from [Gamepedia].

# Setup & Development

ReDota is written in [ES2020+], powered by [MobX] and [React], modularized using [ECMAScript modules] and
developed with [webpack].

1. Clone the repository:

   ```shell
   git clone git://github.com/timkurvers/redota.git
   ```

2. Download and install [Node.js] 14+ for your platform.

3. Install dependencies:

   ```shell
   npm install
   ```

4. Run the dev server on `http://localhost:8080` which automatically monitors source files:

   ```shell
   npm run start:dev
   ```

[Dotabuff]: https://github.com/dotabuff/manta
[ECMAScript modules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[ES2020+]: https://www.strictmode.io/articles/whats-new-es2020/
[Gamepedia]: https://dota2.gamepedia.com/Map
[MobX]: https://mobx.js.org
[Node.js]: https://nodejs.org/
[OpenDota]: https://github.com/odota/parser
[React]: https://reactjs.org/
[Skadistats]: https://github.com/skadistats/clarity
[Valve Corporation]: https://www.valvesoftware.com/
[webpack]: https://webpack.js.org/
