import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/app/App';
import Form from './components/Form';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

var date = new Date().getFullYear();
const routing = (
    <Router>
      <main>
        <header className="bg-primary">
            <h1 className="text-white text-center p-3">Cat card app</h1>
        </header>

        <Route exact path="/" component={App}/>
        <Route path="/form" component={Form}/>
        
        <button className="btn btn-lg btn-danger circle add">
            <Link to="/form"><i className="fas fa-plus"></i></Link>
        </button>

        <footer className="bg-light">
          <div className="container text-center">
            <i className="far fa-copyright mr-1"></i><label> {date} - Lille 1 </label>
            <span className="small font-italic infos"> No cat has been hurt during the development of this app. </span>
          </div>
        </footer>
      </main>
    </Router>
  )
  
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();