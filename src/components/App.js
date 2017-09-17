import React from 'react';
import Filter from './Filter';
import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentFilter: null,
      filters      : [],
      fruit        : []
    };

    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));

    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    this.setState({currentFilter: event.target.value});
    console.log('new filter: ', event.target.value);
  }

  render() {
    return (
      <div>
        <Filter filters={this.state.filters} handleChange={this.handleFilterChange} />
        <FruitBasket fruit={this.state.fruit} currentFilter={this.state.currentFilter} />
      </div>
    );
  }
}

export default App;
