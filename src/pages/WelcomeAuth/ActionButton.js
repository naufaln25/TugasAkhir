import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../utills/colors';

const ActionButton = ({title, onPress}) => {
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
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    height: 56,
    paddingHorizontal: 55,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: 'white',
    borderWidth: 1,
  },
  btnTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default ActionButton;
