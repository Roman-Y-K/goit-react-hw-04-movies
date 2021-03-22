import React, { Component } from 'react';
import { fetchReviews } from '../../ApiServise';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchReviews(movieId).then(data => {
      this.setState({ reviews: data.results });
    });
  }

  render() {
    const { reviews } = this.state;

    return reviews.length !== 0 ? (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>We didn't have any reviews for this movie</p>
    );
  }
}

export default Reviews;
