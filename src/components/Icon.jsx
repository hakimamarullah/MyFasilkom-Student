import React from 'react';
import {
  Profile as ProfileBtn,
  ProfileActive,
  Attendance as AttendanceBtn,
  AttendanceActive,
  HomeActive,
  HomeOutline,
  ScheduleActive,
  ScheduleOutline,
  InfoActive,
  InfoOutline,
} from '../assets';
import {ROUTES} from '../constants';

const Icon = ({label = '', isFocused = false}) => {
  if (label === ROUTES.HOME) {
    return isFocused ? <HomeActive /> : <HomeOutline />;
  }

  if (label === ROUTES.SCHEDULE) {
    return isFocused ? <ScheduleActive /> : <ScheduleOutline />;
  }

  if (label === ROUTES.PROFILE) {
    return isFocused ? <ProfileActive /> : <ProfileBtn />;
  }

  if (label === ROUTES.ATTENDANCE_STACK) {
    return isFocused ? <AttendanceActive /> : <AttendanceBtn />;
  }

  if (label === ROUTES.INFO) {
    return isFocused ? <InfoActive /> : <InfoOutline />;
  }

  return <HomeOutline />;
};
export default Icon;
