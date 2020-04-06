import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Card from './components/Card'
import db from './db/db.json'

class App extends Component {
  state = {
    input: '',
    search: '',
    category: '',
    selected: '',
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitSearch = (event) => {};

  renderEmployee(category) {}

  handleSelectLowerCase = (event) => {
    this.setState({ category: event.target.value.toLowerCase() });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Search
            input={this.state.input}
            handleInputChange={this.handleInputChange}
            handleSubmitSearch={this.handleSubmitSearch}
            handleSelectLowerCase={this.handleSelectLowerCase}
          />
          <Card/>
        </div>
        
      </div>
    );
  }
}

export default App;
