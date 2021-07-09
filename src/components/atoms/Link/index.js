import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utills/colors';

const Link = ({title, onPress, style}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Link;
