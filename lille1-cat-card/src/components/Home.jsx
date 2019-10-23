import React from 'react';
import CatCard from './CatCard';
import {Link, BrowserRouter as Router } from 'react-router-dom';

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
                        
            <button className="btn btn-lg btn-danger circle add">
            <Link to="/form"><i className="fas fa-plus"></i></Link>
            </button>   

            </section>
 
        );
    }
}
export default Home;