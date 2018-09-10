import React from 'react';
import './Search.css';

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
      firstname: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { searchQuery } = this.state;
    event.preventDefault();

    console.log(this.state);
  }

  handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.setState({ [inputName]:inputValue })

    // this.setState({
    //   firstname: event.target.value,
    // })
    //
    // if (inputName === 'searchQuery') {
    //   this.setState({ searchQuery: inputValue });
    // }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='firstname'
          onChange={this.handleChange} />
        <input
          name='searchQuery'
          ref={(input) => this.searchQuery = input}
          onChange={event => this.setState({ searchQuery: event.target.value })} />
        <button>Submit</button>
      </form>
    );
  }
}
