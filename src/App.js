import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      serachVal: ''
    }

  }

  render() {
    const {monsters,serachVal} = this.state; //è uguale a "const monster = this.state.monsters, ecc"
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(serachVal.toLowerCase())
    )
    return (
      <div className="App">
        <input type='search' placeholder='search monster' onChange={
          e => this.setState({serachVal: e.target.value},
            //() => console.log(this.state) // callback function (simile ad await di Flutter)
          )
        }/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
}

export default App;
