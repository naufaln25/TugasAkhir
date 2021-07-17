import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="News" component={News} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
