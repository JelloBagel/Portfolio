# JelloBagel.github.io

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy`

Builds the app for production to Github.<br>

## Resources:

- Created using create-react-app
- Initial react routing solved by: https://github.com/facebook/create-react-app/issues/1765
- Page reload routing solved by: https://github.com/rafrex/spa-github-pages
- Implemented react-transition-group on routing solved by: https://medium.com/lalilo/dynamic-transitions-with-react-router-and-react-transition-group-69ab795815c9 (simple example: https://reacttraining.com/react-router/web/example/animated-transitions)
- Integrate phaser 3: https://www.npmjs.com/package/phaser (base game: https://phaser.io/tutorials/making-your-first-phaser-3-game/part1)
- Understanding how webpack is integrated--html-webpack-plugin: (https://blog.logrocket.com/getting-started-with-create-react-app-d93147444a27/)
- Load game images, (url-loader converts small images into base64) solved by: https://github.com/webpack-contrib/file-loader
- Phaser game not unmounting on route change solved by: http://www.html5gamedevs.com/topic/32563-whats-the-proper-way-to-destroy-a-phaser-3-game-instance/
