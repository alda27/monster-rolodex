import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {Search} from './components/search-box/search-box.component'

class App extends Component{
    constructor(){
        super();
        this.state = {
            monsters : [],
            searchField : '',
        };
        this.changeHandlerSearch = this.changeHandlerSearch.bind(this)
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({monsters : users}))
    
    }

    changeHandlerSearch(e) {
        this.setState({searchField : e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => { return monster.name.toLowerCase().includes(searchField.toLowerCase())})
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <Search placeholder="Search Monster" changeHandler={this.changeHandlerSearch}/>
                <CardList monsters={filteredMonsters}/>
            </div>
          );
    }
}

export default App;
