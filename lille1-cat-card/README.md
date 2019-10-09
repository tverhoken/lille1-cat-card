This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you èject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can èject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except èject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use èject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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


## Notes :
1. State & Props :
    - `state` : modifiable
    - `props` : non modifiable car hérité de son component père
    - Chemin : créer state dans le component père -> envoyer vers les components fils par props

    <details><summary>code</summary>

    ```javascript
    class App extends React.Component { // père
        constructor(props) {
            super(props);
            this.state = {
                header: "Header from props test",
                content: "Content from props tes"
            }
        }
        render() {
            return (
                <div>
                    <Header headerProp = {this.state.header}/>
                    <Content contentProp = {this.state.content}/>
                </div>
            );
        }
    }
    class Header extends React.Component { //fils
        render() {
            return (
                <div>
                    <h1>{this.props.headerProp}</h1>
                </div>
            );
        }
    }
    ```
    </details>

    - `setState()` : update un state déjà existé
    <details><summary>code</summary>

    ```javascript
    class App extends React.Component {
        constructor() {
            super();
            this.state = {data: []}
            this.setStateHandler = this.setStateHandler.bind(this);
            // la fonction a pas été définie -> bind
        };
        setStateHandler() {
            var item = "setState..."
            var myArray = this.state.data.slice();
            myArray.push(item);
            this.setState({data: myArray})
        };
        render() {
            return (
                <div>
                    <button onClick = {this.setStateHandler}>SET STATE</button>
                    <h4>State Array: {this.state.data}</h4>
                </div>
            );
        }
    }
    ```
    </details>

    - `forceUpdate()` : update component sans passer par state
    <details><summary>code</summary>

    ```javascript
    class App extends React.Component {
        constructor() {
            super();
            this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        };
        forceUpdateHandler() {
            this.forceUpdate();
        };
        render() {
            return (
                <div>
                    <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
                    <h4>Random number: {Math.random()}</h4>
                </div>
            );
        }
    }
    ```
    </details>


    - `findDOMNode()` : DOM (Document Object Model) virtual (ex node html div -> React.div)
    <details><summary>code</summary>

    ```javascript

    import React from 'react';
    import ReactDOM from 'react-dom';

    class App extends React.Component {
        constructor() {
            super();
            this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
        };
        findDomNodeHandler() {
            var myDiv = document.getElementById('myDiv');
            ReactDOM.findDOMNode(myDiv).style.color = 'green';
        }
        render() {
            return (
                <div>
                    <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
                    <div id = "myDiv">NODE</div>
                </div>
            );
        }
    }
    export default App;
    ```
    </details>

2. React component :
    - React component life cycle méthodes : 
        + `componentWillMount` : Avant render sur server side et client side (exécutée avant que le composant ne soit inséré dans le DOM render n’a pas été appelée.)
        + `componentDidMount` : après render sur client side (exécutée après que le composant ait été inséré dans le DOM render a été appelée.)
        + `componentWillReceiveProps` : exécuter quand props est updated et avant re-render le component.
        + `shouldComponentUpdate` : return true or false. Pour vérifier si un component a été update. Si on veut pas component re-render après update state ou props, return false.
        + `componentWillUpdate` : exécuter quand on update state de component et component n'a pas encore re-render. (exécutée avant que le composant ne soit mis à jour dans le DOM render n’a pas encore été ré-appelée)
        + `componentDidUpdate` : exécutée après componentWillUpdate (exécutée après que le composant ait été mis à jour dans le DOM render a déjà été ré-appelée)
        + `componentWillUnMount` : exécutée juste avant que le composant ne soit retiré du DOM. Ex retire un component après 10s : ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000); 

    <details><summary>code</summary>

    ```javascript
    import React from 'react';

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.state = {
                data: 0
            }
            this.setNewNumber = this.setNewNumber.bind(this)
        };
        setNewNumber() {
            this.setState({data: this.state.data + 1})
        }
        render() {
            return (
                <div>
                    <button onClick = {this.setNewNumber}>INCREMENT</button>
                    <Content myNumber = {this.state.data}></Content>
                </div>
            );
        }
    }
    class Content extends React.Component {
        componentWillMount() {
            console.log('Component WILL MOUNT!')
        }
        componentDidMount() {
            console.log('Component DID MOUNT!')
        }
        componentWillReceiveProps(newProps) {    
            console.log('Component WILL RECIEVE PROPS!')
        }
        shouldComponentUpdate(newProps, newState) {
            return true;
        }
        componentWillUpdate(nextProps, nextState) {
            console.log('Component WILL UPDATE!');
        }
        componentDidUpdate(prevProps, prevState) {
            console.log('Component DID UPDATE!')
        }
        componentWillUnmount() {
            console.log('Component WILL UNMOUNT!')
        }
        render() {
            return (
                <div>
                    <h3>{this.props.myNumber}</h3>
                </div>
            );
        }
    }
    export default App;
    ```
    </details>

3. React form :
    - data dans le form est le state de component -> vérifier par onChange

    <details><summary>code</summary>

    ```javascript
    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.state = {
                data: 'Initial data...'
            }
            this.updateState = this.updateState.bind(this);
        };
        updateState(e) {
            this.setState({data: e.target.value});
        }
        render() {
            return (
                <div>
                    <input type = "text" value = {this.state.data} 
                    onChange = {this.updateState} />
                    <h4>{this.state.data}</h4>
                </div>
            );
        }
    }
    ```
    </details>
