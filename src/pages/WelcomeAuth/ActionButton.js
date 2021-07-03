import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button} from '../../components';

const ActionButton = ({title}) => {
  return (
    <View>
      <Button title={title} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ActionButton;
