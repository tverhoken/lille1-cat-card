import React from 'react';
import '../../css/main.css';
import Home from '../Home';
import Form from '../Form';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        data:[
            {
                id: 1,
                title: 'Random cat card',
                imageUrl: 'https://cataas.com/cat',
                description: 'That card shows a random cat image.'
            },
            {
                id: 2,
                title: 'Random cat card',
                imageUrl: 'https://cataas.com/cat/says/Hello',
                description: 'That card shows a random cat image with a text !'
            }

        ]};
        this.addNewElement = this.addNewElement.bind(this);
    };

    addNewElement(formResult) {
        var item = formResult;
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray});
    }

    render() {
        var date = new Date().getFullYear();
        return (
            <Router>
                <main>
                    <header className="bg-primary">
                        <h1 className="text-white text-center p-3">Cat card app</h1>
                    </header>

                    <Route exact path="/" render={(props) => (<Home {...props} myDataProp={this.state.data}/>)}/>
                    <Route exact path="/form" render={(props) => (<Form {...props} longueur={this.state.data.length} addNewElement={this.addNewElement}/>)}/>
                    <Route path="/form/:id" render={(props) => (<Form {...props} editData={this.state.data[props.match.params.id-1]} addNewElement={this.addNewElement}/>)}/>
            
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
        );
    }
}
export default App;