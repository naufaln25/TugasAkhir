import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBack} from '../../assets';
import {Input, Button, Link} from '../../components';

const Register = ({navigation}) => {
  const [form, setForm] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
    rePassword: '',
  });

  useEffect(() => {
    console.log('Test Hello');
  }, []);

  const linkToGo = screen => {
    navigation.navigate(screen);
  };

  const sendData = () => {
    console.log('Data yang dikirim : ');
  };

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <IconBack width={25} height={25} onPress={() => linkToGo('Login')} />
        <Text style={styles.Title}>Create New Account</Text>
        <View />
      </View>

      {/* Content */}
      <View style={styles.wrapper}>
        <Input placeholder="Nama Lengkap" value={form.fullName} />
        <View style={styles.space(20)} />
        <Input placeholder="Username" value={form.userName} />
        <View style={styles.space(20)} />
        <Input placeholder="Email" value={form.email} />
        <View style={styles.space(20)} />
        <Input placeholder="Password" value={form.password} />
        <View style={styles.space(20)} />
        <Input placeholder="Re-Enter Password" value={form.rePassword} />
        <View style={styles.space(34)} />
        <Button title="Sign Up" onPress={sendData} />
        <View style={styles.signWrapper}>
          <Text>Sudah Punya Akun ? </Text>
          <Link title="Sign In" onPress={() => linkToGo('Login')} />
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
  wrapper: {
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

export default Register;
