Steps For using Redux Saga :
1.  go to action/index.js : define your action 
2.  Go to reducers/index.js : put a return statement for your action type
3.  Create your component : and do your thing 
        mapStateToProps : This is Used when you are using state variables in your current component. (when ever you want to show state data)
        mapDispatchToProps : This is used when you want to dispatch your data (send your data to centralized state)
        Connect : it create the brifge between your component and centralized store. 
            connect(mapStateToProps,mapDispatchToProps)(your component name);  // if you want to send the data and fetch n use something
            connect(null,mapDispatchToProps)(your component name); // if you want to send the data only
            connect(mapStateToProps,null)(your component name); // if you want to fetch and use the data only
        To access the centralized state variable in your component you can use this.props
4. Go to sagas/index.js : if you wanna make any api call or operation you can do it here. 
                            To access the state variable here you can use select statement.
                            let text = yield select((state)=> state.text); like this
                            You will be using yield in here. The yield keyword pauses generator function execution and the value of the expression following the yield keyword is returned to the generator's caller. its kind of like async await. It waits untill it gets the result.

    To access the centralized 

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

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
