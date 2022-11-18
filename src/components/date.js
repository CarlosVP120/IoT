import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }

    day() {
      var d = new Date();
      var dayWeek = d.getDay();
      if (dayWeek===1) {
        dayWeek = "Monday"
      } else if (dayWeek===2) {
        dayWeek = "Tuesday"
      } else if (dayWeek===3) {
        dayWeek = "Wednesday"
      } else if (dayWeek===4) {
        dayWeek = "Thursday"
      } else if (dayWeek===5) {
        dayWeek = "Friday"
      } else {
        dayWeek = "Weekend"
      }
      return dayWeek
    }
    render() {
      return (
        <p className="App-clock">
          {this.day()} {this.state.time}
        </p>
      );
    }
  }

export default Clock;