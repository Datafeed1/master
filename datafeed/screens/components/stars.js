import StarRating from 'react-native-star-rating';
import React, {Component} from 'react';

class CustomStarExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating
        disabled={false}
        // starSize={"50"}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor={'orange'}
      />
    );
  }
}

export default CustomStarExample