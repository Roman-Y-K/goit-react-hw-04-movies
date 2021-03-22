import React, { Component } from 'react';
import { fetchPopularFilms } from '../ApiServise';
import FilmsList from '../Components/FilmsList';

class HomeView extends Component {
  componentDidMount() {
    const { fetchFilms } = this.props;

    fetchPopularFilms().then(filmsArr => fetchFilms(filmsArr));
  }

  componentWillUnmount() {
    const { fetchFilms } = this.props;

    fetchFilms([]);
  }

  render() {
    const { films } = this.props;

    return (
      <div>
        <h1>Trending today</h1>

        {films && <FilmsList films={films} />}
      </div>
    );
  }
}

export default HomeView;
