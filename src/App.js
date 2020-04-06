import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Card from './components/Card'
import db from './db/db.json'

class App extends Component {
  state = {
    input: '',
    search: '',
    category: 'department',
    selected: '',
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSelect = (event) => {
    this.setState({ category: event.target.value.toLowerCase() });
  };

  handleSubmitSearch = (event) => {
    event.preventDefault();
    this.setState({
      input: '',
      search: this.state.input,
      category: '',
      selected: this.state.category
    })
  };

  renderEmployee = (category) => {
    // console.log(category)
    // console.log(this.state.search)
    if (this.state.search !== ''){
      return db.map((employee, i) => {
        switch (category){
          case 'department':
            if (employee.department === this.state.search) {
              console.log(employee.department)
              console.log(this.state.search)
              return <Card employee={employee} key={i} />;
            }
            break;
          case 'title':
            if (employee.title === this.state.search) {
              return <Card employee={employee} key={i} />;
            }
            break;
          case 'gender':
            if (employee.gender === this.state.search) {
              return <Card employee={employee} key={i} />
            }
            break;
        }
      })
    }else {
      
      return db.map((employee, i) => <Card employee={employee} key={i}/>)
    } 
  }

  

  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Search
            input={this.state.input}
            handleInputChange={this.handleInputChange}
            handleSubmitSearch={this.handleSubmitSearch}
            handleSelect={this.handleSelect}
          />
        </div>
        <div className="row">
          {this.renderEmployee(this.state.selected)}
        </div>
      </div>
    );
  }
}

export default App;
