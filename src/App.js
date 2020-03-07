import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
//super calls the constructeor method of the component class, which gives us access to the state object

this.state = {
  monsters: [],
  searchField: ''
};

  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange(e) {
    e => this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <SearchBox 
        placeholder='search monsters' 
        handleChange={this.handleChange(e)}
      />
      <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
