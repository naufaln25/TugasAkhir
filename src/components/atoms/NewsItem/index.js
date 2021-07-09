import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

export default function index({title, source, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <View style={styles.image}>
        <Image source={source} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 352,
    height: 180,
    borderRadius: 15,
    marginBottom: 15,
  },
  image: {
    backgroundColor: 'grey',
    width: 352,
    height: 180,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    padding: 20,
    bottom: 0,
  },
});
