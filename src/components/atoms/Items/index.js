import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function index({onPress, title, source}) {
  return (
    <TouchableOpacity style={styles.itemWrapper} onPress={onPress}>
      <Image source={source} />
      <Text style={styles.itemTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: 'grey',
    width: 310,
    height: 180,
    borderRadius: 15,
    marginTop: 10,
    marginRight: 10,
  },
  itemTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15,
    position: 'absolute',
    top: 100,
  },
});