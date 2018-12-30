# Tic Tac Toe
This is the frontend part of a classic tic-tac-toe game. It is responsible for
presenting the game to the players.

Frontend saves the moves made by the players in the
[backend](https://github.com/vilisimo/tic-tac-toe-be). As long as the browser
tab is open, the ongoing game can be retrieved and resumed. Opening a new tab
will start a new game. Refreshing the current tab will resume the game. In
fact, it will retrieve the moves made and replay them in rapid succession,
hence the possible flicker. In the future a loading animation could be shown
for some time to make the replay smoother. Alternatively, some delay between
the moves could be introduced for a fancy replay effect.

## Running Tic Tac Toe FE

### Prerequisites
The app expects that the backend will be up and running. Without it, some
of the functionality may not work, although the bare basics (moves,
determining the winner) should work.

Therefore, before running the app, one should make sure that the backend is
operational. More about how to run it can be read in backend's
[`README`](https://github.com/vilisimo/tic-tac-toe-be/blob/master/README.md)
file. A short guide on how to run it will be provided in the next section,
too.

### Launching the App
There are couple of ways to launch the app. All of them require backend, so
first of all it's best to clone the
[backend project](https://github.com/vilisimo/tic-tac-toe-be/), and build the
docker image:

~~~
cd ~/<some-directory>
git clone git@github.com:vilisimo/tic-tac-toe-be.git
cd tic-tac-toe-be
gradle jibDockerBuild
~~~

Now it's time to build the FE docker image:

~~~
cd ~/<some-directory>/tic-tac-toe-fe
docker build -t tictactoe-fe .
~~~

Once this is done, FE can be launched via `docker-compose` like so:

~~~
docker-compose up -d    # runs mysql + backend + frontend
~~~

Give a few moments for everything to spin up and navigate to:

- http://localhost:3000

You should see the tic-tac-toe board ready for playing.

Alternatively, the app can be run locally, too:

~~~
yarn install
yarn start
~~~

## Frontend
Frontend was made with a few assumptions in mind. Mainly:

- Frontend is "smart" in a sense that it determines the winners and makes sure
that the game's rules are not broken.
- Frontend consults BE for history of moves, not session/local storage. The
same effect could be achieved by persisting state to local/session storage,
but the idea of the project was to connect the BE and FE, and this seemed like
a neat way to reuse actions.
- No elaborate error handling is needed. That is, FE expects BE to be always
on. It does not handle situations where the BE is not reachable.
- User should be able to resume the game only if he/she does not navigate out
of the current browser's tab. Opening a new tab will start a new game.
Refreshing the current tab, however, will not - the game will be continued.

## Technologies
- React 16 / JavaScript (ES6+)
- Jest for tests
- Redux for state management
- Redux Thunk for middleware
