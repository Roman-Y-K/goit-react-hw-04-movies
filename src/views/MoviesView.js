import React, { Component } from 'react';
import FilmsList from '../Components/FilmsList';
import { fetchFilmsWithQuery } from '../ApiServise';

class MoviesView extends Component {
  state = {
    query: '',
  };

  onChange = evt => {
    this.setState({ query: evt.currentTarget.value });
  };

  onSubmit = evt => {
    evt.preventDefault();

    const { fetchFilms } = this.props;
    const { query } = this.state;

    fetchFilmsWithQuery(query).then(filmsArr => {
      fetchFilms(filmsArr);
    });

    this.setState({ query: '' });
  };

  render() {
    const { films } = this.props;

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="filmQuery"
            value={this.state.query}
            onChange={this.onChange}
          />
          <button type="submit">Search</button>
        </form>

        {films && <FilmsList films={films} />}
      </>
    );
  }
}

export default MoviesView;
