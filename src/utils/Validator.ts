import {REGEX} from '../constants';
const majors = ['Computer Science', 'Information System'];
export const Validator = {
  checkNonBlankString: (input: String) => !input || input.trim().length <= 0,
  checkEmail: (input: String) => !input.match(REGEX.email),
  checkNpm: (input: String) =>
    !input.match(REGEX.numeric) || !(String(input).length === 10),
  checkNumeric: (input: any) => !input.match(REGEX.numeric),
  checkPassword: (input: String) => !input || input.trim().length <= 5,
  checkMajor: (input: String) =>
    !(majors.filter(item => item === input).length > 0),
  checkYear: (input: Number) =>
    !String(input).match(REGEX.numeric) || !(input <= new Date().getFullYear()),
};
