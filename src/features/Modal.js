import React from "react";
import { getMonthName, getFancyDate } from "../utils/utils";

const Modal = ({ hideModal, show, holidayData }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log("modal data is ", holidayData);
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {holidayData && (
          <h1 className="full-date">{getFancyDate(holidayData.date)}</h1>
        )}
        {holidayData &&
          holidayData.holidays.map((holiday, index) => {
            return (
              <div key={index}>
                <h4 className="holiday-name">{holiday.name}</h4>
                <div>
                  {holiday.type &&
                    holiday.type.map((typeName, index) => {
                      return (
                        <span className="tag" key={index}>
                          {typeName}
                        </span>
                      );
                    })}
                </div>
                <div className="description">
                  {holiday.description && <p>{holiday.description}</p>}
                </div>
              </div>
            );
          })}
        <button onClick={hideModal} className="close-btn">
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
