import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/app/App';
import Form from './components/Form';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/form" component={Form} />
        <button className="btn btn-lg btn-danger circle add">
            <Link to="/form"><i className="fas fa-plus"></i></Link>
        </button>
      </div>
    </Router>
  )
  
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();