import React, { Component } from "react";
import { getMonthName } from "../utils/utils";
import Modal from "./Modal";

class TabComponent extends Component {
  state = {
    isModalVisible: false,
    holidayData: null
  };

  showModal = holidayData => {
    this.setState({ isModalVisible: true, holidayData });
  };
  hideModal = () => {
    this.setState({ isModalVisible: false });
  };
  render() {
    const { data } = this.props;
    const { isModalVisible, holidayData } = this.state;
    return (
      <div className="tab-component-view box-shadow">
        <div className="grid-container">
          {data &&
            data.map((holiday, index) => {
              return (
                <div
                  className="grid-item"
                  key={index}
                  onClick={() => this.showModal(holiday)}
                >
                  <h1 className="date">
                    {holiday.date.datetime.day}
                    <span className="th">th</span>
                  </h1>
                  <p className="month">
                    {getMonthName(holiday.date.datetime.month)}
                  </p>
                </div>
              );
            })}
        </div>
        <Modal
          show={isModalVisible}
          hideModal={this.hideModal}
          holidayData={holidayData}
        />
      </div>
    );
  }
}

export default TabComponent;
