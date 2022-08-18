import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          {
            planets
              .map((p, i) => (
                (<PlanetCard key={ i } planetName={ p.name } planetImage={ p.image } />)
              ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
