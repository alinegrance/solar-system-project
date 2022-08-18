import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Mission extends React.Component {
  render() {
    return (
      <div data-test-id="mission">
        <Title headline="Missões" />
        <div>
          {
            missions.map((mission, index) => <MissionCard key={ index } mission={ mission } />)
          }
        </div>
      </div>
    );
  }
}

export default Mission;
