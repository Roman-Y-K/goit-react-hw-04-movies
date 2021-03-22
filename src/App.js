import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import AppBar from './Components/AppBar';

const HomeView = lazy(() => import('./views/HomeView.js'));
const MoviesView = lazy(() => import('./views/MoviesView.js'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage.js'));

class App extends Component {
  state = {
    films: [],
  };

  getFilms = prop => {
    this.setState({ films: prop });
  };

  render() {
    const { films } = this.state;
    return (
      <div>
        <AppBar />
        <Suspense fallback={<h3>Please wait...</h3>}>
          <Switch>
            <Route
              exact
              path={routes.home}
              render={props => (
                <HomeView {...props} fetchFilms={this.getFilms} films={films} />
              )}
            />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route
              path={routes.moviesView}
              render={props => (
                <MoviesView
                  {...props}
                  fetchFilms={this.getFilms}
                  films={films}
                />
              )}
            />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
