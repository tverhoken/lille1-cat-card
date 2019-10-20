import React from 'react';
// import '../css/main.css';
import CatCard from './CatCard';

class Home extends React.Component {
    render() {
        return (
            <section className="container">
                <h2>Cat card list</h2>
                <hr />
                <div className="card-group">
                    {this.props.myDataProp.map((dynamicComponent, i) => <CatCard 
                        key = {i} componentData = {dynamicComponent}/>)}
                </div>                
            </section>
        );
    }
}
export default Home;