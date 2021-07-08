import React from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Router from './router';
import {Provider} from 'react-redux';
import {store} from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
