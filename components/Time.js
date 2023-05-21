import React from 'react';
 
class Time extends React.Component {

  constructor() {
      super();
      this.state = { time: new Date() }; // initialise the state
  }

  componentDidMount() { // create the interval once component is mounted
      this.update = setInterval(() => {
          this.setState({ time: new Date() });
      }, 1 * 100); // every 10 seconds
  }

  componentWillUnmount() { // delete the interval just before component is removed
      clearInterval(this.update);
  }

  render() {
      const { time } = this.state; // retrieve the time from state

      return (<div  className="ml-2">
              {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </div>);
  }
}
 
export default Time;