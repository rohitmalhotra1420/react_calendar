import { API_KEY } from "../utils/constants";
import { getCurrentYear } from "../utils/utils";

const countryCode = "IN";
const year = getCurrentYear();

export const getHolidayList = async () => {
  const response = await fetch(
    `https://calendarific.com/api/v2/holidays?country=${countryCode}&year=${year}&api_key=${API_KEY}`
  );
  const data = response.json();
  return data;
};
