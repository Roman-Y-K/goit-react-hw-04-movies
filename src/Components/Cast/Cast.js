import React, { Component } from 'react';
import { fetchCast } from '../../ApiServise';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchCast(movieId).then(castData =>
      this.setState({ cast: castData.cast.slice(0, 8) }),
    );
  }

  render() {
    const { cast } = this.state;
    return (
      <div>
        <ul>
          {cast.map(actor => (
            <li key={actor.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt="actor"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Cast;
