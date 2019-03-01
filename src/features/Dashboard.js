import React, { Component } from "react";
import { getHolidayList } from "./api";
import { holidayDifferentiator, combineSameHolidays } from "../utils/utils";
import TabView from "./TabView";
import TopHeader from "./TopHeader";

class Dashboard extends Component {
  state = {
    passedHolidays: [],
    upcomingHolidays: [],
    presentDayHoliday: [],
    error: false,
    loading: true
  };
  componentDidMount() {
    this.holidayList();
  }
  holidayList = () => {
    getHolidayList()
      .then(response => {
        console.log(response);
        if (response && response.meta.code === 200) {
          const holidayData = holidayDifferentiator(response.response.holidays);
          const {
            passedHolidays,
            upcomingHolidays,
            presentDayHoliday
          } = holidayData;
          // console.log(passedHolidays, upcomingHolidays, presentDayHoliday);
          const combinedDuplicatePassedHolidays = combineSameHolidays(
            passedHolidays
          );
          const combinedDuplicateUpcomingHolidays = combineSameHolidays(
            upcomingHolidays
          );
          const combineDuplicatePresentDayHolidays = combineSameHolidays(
            presentDayHoliday
          );
          console.log(
            combinedDuplicatePassedHolidays,
            combinedDuplicateUpcomingHolidays,
            combineDuplicatePresentDayHolidays
          );
          this.setState({
            passedHolidays: combinedDuplicatePassedHolidays,
            upcomingHolidays: combinedDuplicateUpcomingHolidays,
            presentDayHoliday: combineDuplicatePresentDayHolidays,
            loading: false
          });
        } else {
          this.setState({
            loading: false,
            error: true
          });
        }
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
        console.log(error.message);
      });
  };
  render() {
    const {
      upcomingHolidays,
      passedHolidays,
      loading,
      error,
      presentDayHoliday
    } = this.state;
    if (loading) {
      return <div className="centered-text">Loading...</div>;
    }
    if (error) {
      return <div className="centered-text">Error Loading Data</div>;
    }
    return (
      <div className="main-container">
        <TopHeader presentDayHoliday={presentDayHoliday} />
        <TabView
          upcomingHolidays={upcomingHolidays}
          passedHolidays={passedHolidays}
        />
      </div>
    );
  }
}

export default Dashboard;
