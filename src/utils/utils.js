const dateInstance = new Date();

export const getCurrentYear = () => {
  const year = dateInstance.getFullYear();
  return year;
};
export const getCurrentDate = () => {
  const date = dateInstance.getDate();
  return date;
};
export const getcurrentMonth = () => {
  const month = dateInstance.getMonth();
  return month + 1;
};

export const getMonthName = monthNumber => {
  const monthsArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const monthName = monthsArr[monthNumber - 1];
  return monthName;
};
//function to calculate present day, passed and upcoming holidays
export const holidayDifferentiator = totalHolidays => {
  const holidayData = {
    passedHolidays: [],
    upcomingHolidays: [],
    presentDayHoliday: null
  };
  const currentMonth = 3;
  const currentDate = 1;
  totalHolidays.forEach(holiday => {
    const month = holiday.date.datetime.month;
    if (month < currentMonth) {
      holidayData.passedHolidays.push(holiday);
    } else if (month > currentMonth) {
      holidayData.upcomingHolidays.push(holiday);
    } else if (month === currentMonth) {
      const date = holiday.date.datetime.day;
      if (date < currentDate) {
        holidayData.passedHolidays.push(holiday);
      } else if (date > currentDate) {
        holidayData.upcomingHolidays.push(holiday);
      } else {
        console.log(holiday);
        holidayData.presentDayHoliday = holiday;
      }
    }
  });
  return holidayData;
};
