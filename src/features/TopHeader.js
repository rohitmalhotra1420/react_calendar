import React from "react";
import { getMonthName, getFancyDate } from "../utils/utils";
const TopHeader = ({ presentDayHoliday }) => {
  console.log("the present is ", presentDayHoliday);
  if (presentDayHoliday === [] || presentDayHoliday.length < 1) {
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
          {presentDayHoliday.map((items, index) => {
            return (
              <div key={index}>
                <h1 className="full-date">{getFancyDate(items.date)}</h1>
                {items.holidays.map((holiday, index) => {
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
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default TopHeader;
