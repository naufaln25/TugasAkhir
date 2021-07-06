import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Button, Link} from '../../components';
import {IconBack} from '../../assets';

const Login = ({navigation}) => {
  const linkToGo = screen => {
    navigation.navigate(screen);
  };

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <IconBack
          width={25}
          height={25}
          onPress={() => linkToGo('WelcomeAuth')}
        />
        <Text style={styles.Title}>Sign In</Text>
        <View />
      </View>

      {/* Content */}
      <View style={styles.inputWrapper}>
        <Input placeholder="Username / Email" />
        <View style={styles.space(20)} />
        <Input placeholder="Password" />
        <View style={styles.space(30)} />
        <Button title="Sign In" />
        <View style={styles.signWrapper}>
          <Text>Belum Memiliki Akun ? </Text>
          <Link title="Sign Up" onPress={() => linkToGo('Register')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 17,
    left: -10,
  },
  backBtn: {
    color: 'black',
  },
  inputWrapper: {
    marginHorizontal: 24,
    marginVertical: 20,
  },
  signWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    left: -5,
  },
  space: value => {
    return {
      height: value,
    };
  },
});

export default Login;
