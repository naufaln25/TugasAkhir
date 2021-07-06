import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utills/colors';

const Link = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.default,
    fontWeight: 'bold',
  },
});

export default Link;
