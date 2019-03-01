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
export const getFancyDate = isoDate => {
  const date = new Date(isoDate).getDate();
  const month = getMonthName(new Date(isoDate).getMonth() + 1);
  const year = new Date(isoDate).getFullYear();
  const fancyDate = `${date} ${month} ${year}`;
  return fancyDate;
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
    presentDayHoliday: []
  };
  const currentMonth = getcurrentMonth();
  const currentDate = getCurrentDate();
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
        holidayData.presentDayHoliday.push(holiday);
      }
    }
  });
  return holidayData;
};

export const combineSameHolidays = myArray => {
  const result = [];
  const dateMap = myArray.reduce((byDate, entry) => {
    const entryWithoutDate = Object.assign({}, entry);
    delete entryWithoutDate.date;

    if (Array.isArray(byDate[entry.date.iso])) {
      byDate[entry.date.iso].push(entryWithoutDate);
    } else {
      byDate[entry.date.iso] = [entryWithoutDate];
    }
    return byDate;
  }, Object.create(null));

  const newArray = Object.keys(dateMap).map(date => ({
    date: date,
    holidays: dateMap[date]
  }));
  return newArray;
};
