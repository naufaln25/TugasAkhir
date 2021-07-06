import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utills/colors';

const Button = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.default,
    fontWeight: 'bold',
    height: 56,
    paddingHorizontal: 55,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  btnTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Button;
