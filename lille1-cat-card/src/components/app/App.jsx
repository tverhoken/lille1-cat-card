import React from 'react';
import '../../css/main.css';
import CatCard from '../CatCard';
import Form from '../Form';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        data:[
            {
                id: 1,
                title: 'Random cat card 1',
                imageUrl: 'https://cataas.com/cat?width=250&height=200',
                description: 'That card shows a random cat image.'
            },
            {
                id: 2,
                title: 'Random cat card 2',
                imageUrl: 'https://cataas.com/cat/says/Hello?width=250&height=200',
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
            <main>
                <header className="bg-primary">
                    <h1 className="text-white text-center p-3">Cat card app</h1>
                </header>
                <section className="container">
                    <h2>Cat card list</h2>
                    <hr />
                    <div className="card-group">
                        {this.state.data.map((dynamicComponent, i) => <CatCard 
                            key = {i} componentData = {dynamicComponent}/>)}
                    </div>

                    <button className="btn btn-lg btn-danger circle add"><i className="fas fa-plus"></i></button>
                    
                    {/* TODO : mettre dans la 2ème page */}
                    <Form addNewElement={this.addNewElement} longueur = {this.state.data.length}/>
                </section>

                <footer className="bg-light">
                    <div className="container text-center">
                        <i className="far fa-copyright mr-1"></i><label> {date} - Lille 1 </label>
                        <span className="small font-italic infos"> No cat has been hurt during the development of this app. </span>
                    </div>
                </footer>
            </main>
        );
    }
}
export default App;