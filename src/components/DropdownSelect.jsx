import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {camelize} from '../utils';
import {COLORS, FONTS} from '../constants';

const DropdownSelect = ({
  setSelected,
  defaultOption,
  data,
  placeholder,
  isError,
}) => {
  data = data.map((item, index) => ({key: index, value: item}));
  defaultOption = data.filter(item => item.value === defaultOption)[0];
  const handleSelected = value => {
    value = data[value].value;
    setSelected(prev => {
      if (typeof prev === 'object') {
        return {...prev, [camelize(placeholder)]: value};
      }
      return value;
    });
  };
  return (
    <View style={styles.container}>
      <SelectList
        setSelected={idx => handleSelected(idx)}
        defaultOption={defaultOption}
        placeholder={placeholder}
        data={data}
        search={false}
        fontFamily={FONTS.TitilliumWeb_SEMI_BOLD}
        dropdownShown={false}
        // eslint-disable-next-line react-native/no-inline-styles
        boxStyles={{borderColor: isError ? COLORS.red : ''}}
      />
    </View>
  );
};

export default DropdownSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
