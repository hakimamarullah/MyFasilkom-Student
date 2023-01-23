import dayjs from 'dayjs';

export const getDayGreet = (hour?: number) => {
  let currentHour = hour || dayjs().hour();
  if (currentHour >= 0 && currentHour < 12) {
    return 'Morning';
  } else if (currentHour < 19) {
    return 'Afternoon';
  }
  return 'Evening';
};
