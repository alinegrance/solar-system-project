import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props.mission;
    return (
      <div data-testid="mission-card">
        <p data-testid="misson-name">{name}</p>
        <p data-testid="misson-year">{year}</p>
        <p data-testid="misson-country">{country}</p>
        <p data-testid="misson-destination">{destination}</p>
      </div>
    );
  }
}

export default MissionCard;

// MissionCard.propTypes = {
//   mission: PropTypes.shape({
//     name: PropTypes.string,
//     year: PropTypes.string,
//     country: PropTypes.string,
//     destination: PropTypes.string,
//   }),
// };
