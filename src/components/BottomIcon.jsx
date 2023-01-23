import React from 'react';
import Icon from './Icon';

const BottomIcon = props => {
  const {focused, route} = props;
  return (
    <>
      <Icon label={route.name} isFocused={focused} />
    </>
  );
};

export default BottomIcon;
