import React from "react";
import { getMonthName } from "../utils/utils";
const TopHeader = ({ presentDayHoliday }) => {
  if (presentDayHoliday == null) {
    return (
      <div>
        <h1 className="no-holiday">No Holiday Today</h1>
      </div>
    );
  } else {
    return (
      <div className="top-header">
        <h1 className="holiday-header">Hey, you got Holiday today.</h1>
        <div>
          <h1 className="full-date">
            {`${presentDayHoliday.date.datetime.day}th ${getMonthName(
              presentDayHoliday.date.datetime.month
            )} ${presentDayHoliday.date.datetime.year}`}
          </h1>
          <h4 className="holiday-name">{presentDayHoliday.name}</h4>
          <div>
            {presentDayHoliday.type &&
              presentDayHoliday.type.map((typeName, index) => {
                return (
                  <span className="tag" key={index}>
                    {typeName}
                  </span>
                );
              })}
          </div>
          <div className="description">
            {presentDayHoliday.description && (
              <p>{presentDayHoliday.description}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default TopHeader;
