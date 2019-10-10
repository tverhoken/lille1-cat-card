import React from 'react';

export default  class CatCard extends React.Component {
    render() {
        return (
            <div className="flipper mb-3" ontouchstart="this.classList.toggle('hover');">
                <div className="front card text-center shadow-sm">
                    <img className="card-img-top" src={this.props.componentData.imageUrl} alt="Cat image" width="250" height="200" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.componentData.title}</h5>
                    </div>
                </div>
    
                <div className="back card text-center shadow-sm">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.componentData.title}</h6>
                        <p className="card-text">{this.props.componentData.description}</p>
                    </div>
    
                    <div className="card-footer">
                        <button href="#" className="btn btn-primary card-link">Edit that cat</button>
                    </div>
                </div>
            </div>
        );
    }
}