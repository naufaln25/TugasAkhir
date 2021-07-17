import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Login,
  Register,
  WelcomeAuth,
  Home,
  Match,
  Teams,
  Store,
  News,
  MatchContent,
  StoreContent,
  NewsContent,
  Player,
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    // initialRouteName="News"
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeAuth"
        component={WelcomeAuth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Match"
        component={Match}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Teams"
        component={Teams}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Store"
        component={Store}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MatchContent"
        component={MatchContent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StoreContent"
        component={StoreContent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsContent"
        component={NewsContent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
