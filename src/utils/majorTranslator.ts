const Major = {
  toEnum: (name: String) => {
    name = name.toUpperCase();
    return name === 'COMPUTER SCIENCE'
      ? 'CS'
      : name === 'INFORMATION SYSTEM'
      ? 'IS'
      : '';
  },
  fromEnum: (major: String) => {
    major = major.toUpperCase();
    return major === 'CS'
      ? 'Computer Science'
      : major === 'IS'
      ? 'Information System'
      : 'Unknown';
  },
};

export default Major;
