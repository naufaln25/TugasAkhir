import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../../../utills/colors';

const Input = ({placeholder, ...rest}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.default}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.default,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: colors.default,
  },
});

export default Input;
