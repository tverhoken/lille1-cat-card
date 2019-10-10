import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
      super(props);

      this.state = {
          id:"",
          title:"",
          imageURL:"",
          description:""
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.saveElement = this.saveElement.bind(this);
  };

  handleInputChange(event) {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
          [name]: value
      });
  }

  saveElement(event) {
      event.preventDefault();
      this.state.id=this.props.longeur+1;
      this.props.addNewElement(this.state);
  }

  render() {
    return (
      <form className="was-validated" onSubmit={this.saveElement}> 
          <div className="form-group row">
              <label htmlFor="cardTitle" className="col-sm-2 col-form-label">Card title</label>
              <input name="title" required className="form-control col-sm-10" placeholder="Card title" type = "text" 
                  value = {this.state.title} onChange = {this.handleInputChange} />
              <div className="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
          </div>

          <div className="form-group row">
              <label htmlFor="cardImage" className="col-sm-2 col-form-label">Card image URL</label>
              <input name="imageURL" required className="form-control col-sm-10" placeholder="Card image URL" type = "text" 
                  value = {this.state.imageURL} onChange = {this.handleInputChange} />
              <div className="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
          </div>

          <div className="form-group row">
              <label htmlFor="cardDescription" className="col-sm-2 col-form-label">Card description</label>
              <textarea name="description" required className="form-control col-sm-10" 
                  value = {this.state.description} onChange = {this.handleInputChange} />
              <div className="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
          </div>

          <button className="btn btn-danger">Delete</button>
          <button type="submit" class="btn btn-primary">Save</button>
      </form>
    );
  }
}