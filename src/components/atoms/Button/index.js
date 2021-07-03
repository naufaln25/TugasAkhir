import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 250,
    height: 40,
    paddingHorizontal: 55,
    paddingVertical: 7,
    borderRadius: 20,
    top: 60,
    marginBottom: 20,
  },
  btnTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0d7250',
  },
});

export default Button;
