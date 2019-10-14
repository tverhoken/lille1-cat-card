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
                title: 'Random cat card',
                imageUrl: 'https://cataas.com/cat?width=250&height=200',
                description: 'That card shows a random cat image.'
            },
            {
                id: 2,
                title: 'Random cat card',
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
        return (
            <section className="container">
                <h2>Cat card list</h2>
                <hr />
                <div className="card-group">
                    {this.state.data.map((dynamicComponent, i) => <CatCard 
                        key = {i} componentData = {dynamicComponent}/>)}
                </div>
                
                {/* TODO : mettre dans la 2ème page */}
                <Form addNewElement={this.addNewElement} longueur = {this.state.data.length}/>
            </section>
        );
    }
}
export default App;