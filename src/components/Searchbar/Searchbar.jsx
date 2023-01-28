import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handlerChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    const { query } = this.state;

    return (
      <header className="searcbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name="query"
            value={query}
            onChange={this.handlerChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
