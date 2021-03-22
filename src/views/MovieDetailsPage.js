import React, { Component, Suspense, lazy } from 'react';
import styles from './styles.module.css';
import { fetchFilmDetails } from '../ApiServise';
import { Link, Route } from 'react-router-dom';
import routes from '../routes';

const Cast = lazy(() => import('../Components/Cast'));
const Reviews = lazy(() => import('../Components/Reviews'));

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    overview: null,
    id: null,
    title: null,
    popularity: null,
    genres: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log();
    fetchFilmDetails(movieId).then(film => this.setState({ ...film }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.home);
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <div className={styles.thumb}>
          <img
            src={`https://image.tmdb.org/t/p/w300${this.state.poster_path}`}
            alt="poster"
            className={styles.poster}
          />
          <div className={styles.fimsDescr}>
            <h2>{this.state.title}</h2>
            <h3>Overview</h3>
            <p>{this.state.overview}</p>
            <h3>Genres</h3>
            <ul>
              {this.state.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <p>Popularity {Math.round(this.state.popularity)}</p>
          </div>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={`${this.props.match.url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<h3>Please wait...</h3>}>
            <Route path={routes.cast} component={Cast} />
            <Route path={routes.reviewes} component={Reviews} />
          </Suspense>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
