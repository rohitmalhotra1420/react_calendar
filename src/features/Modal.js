import React from "react";
import { getMonthName } from "../utils/utils";

const Modal = ({ hideModal, show, holidayData }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {holidayData && (
          <div>
            <h1 className="full-date">
              {`${holidayData.date.datetime.day} ${getMonthName(
                holidayData.date.datetime.month
              )} ${holidayData.date.datetime.year}`}
            </h1>
            <h4 className="holiday-name">{holidayData.name}</h4>
            <div>
              {holidayData.type &&
                holidayData.type.map((typeName, index) => {
                  return (
                    <span className="tag" key={index}>
                      {typeName}
                    </span>
                  );
                })}
            </div>
            <div className="description">
              {holidayData.description && <p>{holidayData.description}</p>}
            </div>
          </div>
        )}
        <button onClick={hideModal} className="close-btn">
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
