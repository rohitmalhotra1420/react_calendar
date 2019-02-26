import React, { Component } from "react";
import TabComponent from "./TabComponent";

class TabView extends Component {
  state = {
    showUpcomingHolidays: true,
    showPassedHolidays: false
  };
  handleUpcomingHolidays = () => {
    this.setState({
      showPassedHolidays: false,
      showUpcomingHolidays: true
    });
  };
  handlePassedHolidays = () => {
    this.setState({
      showUpcomingHolidays: false,
      showPassedHolidays: true
    });
  };
  render() {
    const { showUpcomingHolidays, showPassedHolidays } = this.state;
    const { upcomingHolidays, passedHolidays } = this.props;
    return (
      <div className="tab-view">
        <div>
          <div
            className="tabs box-shadow"
            onClick={this.handleUpcomingHolidays}
            style={
              showUpcomingHolidays
                ? { backgroundColor: "#f2f2f2" }
                : { backgroundColor: "white" }
            }
          >
            <p>Upcoming Holidays</p>
          </div>
          <div
            className="tabs box-shadow"
            onClick={this.handlePassedHolidays}
            style={
              showPassedHolidays
                ? { backgroundColor: "#f2f2f2" }
                : { backgroundColor: "white" }
            }
          >
            <p>Passed Holidays</p>
          </div>
        </div>
        <div>
          {showUpcomingHolidays && <TabComponent data={upcomingHolidays} />}
          {showPassedHolidays && <TabComponent data={passedHolidays} />}
        </div>
      </div>
    );
  }
}

export default TabView;
