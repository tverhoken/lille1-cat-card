import React from 'react';

class App extends React.Component {
   constructor(props) {
        super(props);

        this.state = {
            data : {
                title:"",
                imageURL:"",
                description:""
            },
            listData : {
                title:"",
                imageURL:"",
                description:""
            },
            title:"",
            imageURL:"",
            description:""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    };
    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form className="was-validated"> 
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

                <h3>{this.state.title}</h3>
                <p>{this.state.imageURL}</p>
                <p>{this.state.description}</p> 
            </form>

            // <Form myDataProp = {this.state.data}></Form>
        );
    }
}
class Form extends React.Component {
   render() {
      return (
        <form className="was-validated">
            <div className="form-group row">
                <label htmlFor="cardTitle" className="col-sm-2 col-form-label">Card title</label>
                <input name="data.title" required className="form-control col-sm-10" placeholder="Card title" type = "text" 
                    defaultValue = {this.props.myDataProp.title} onChange = {this.props.handleInputChange} />
                <div className="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
            </div>

            <div className="form-group row">
                <label htmlFor="cardImage" className="col-sm-2 col-form-label">Card image URL</label>
                <input name="data.imageURL" required className="form-control col-sm-10" placeholder="Card image URL" type = "text" 
                    value = {this.props.myDataProp.imageURL} onChange = {this.props.handleInputChange} />
                <div className="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
            </div>

            <div className="form-group row">
                <label htmlFor="cardDescription" className="col-sm-2 col-form-label">Card description</label>
                <textarea name="description" required className="form-control col-sm-10" 
                    value = {this.props.myDataProp.description} onChange = {this.props.handleInputChange} />
                <div className="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
            </div>

            <h3>{this.props.title}</h3>
            <p>{this.props.imageURL}</p>
            <p>{this.props.description}</p> 
        </form>
      );
   }
}
export default App;