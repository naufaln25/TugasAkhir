import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Input, Link} from '../../components';
import {setForm} from '../../redux';
import {colors} from '../../utills/colors';

const Login = ({navigation}) => {
  const {form} = useSelector(state => state.LoginReducer);
  const dispatch = useDispatch();

  const linkToGo = screen => {
    navigation.navigate(screen);
  };

  const sendData = () => {
    console.log('Data yang dikirim : ', form);
  };

  const onInputChange = (value, input) => {
    // setForm({
    //   ...form,
    //   [input]: value,
    // });
    dispatch(setForm(input, value));
  };

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Button type="icon" name="back" onPress={() => navigation.goBack()} />
        <Text style={styles.Title}>Sign In</Text>
        <View />
      </View>

      {/* Content */}
      <View style={styles.inputWrapper}>
        <Input
          placeholder="Username"
          value={form.fullName}
          onChangeText={value => onInputChange(value, 'userName')}
        />
        <View style={styles.space(20)} />
        <Input
          placeholder="Password"
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(30)} />
        <Button title="Sign In" onPress={sendData} />
        <View style={styles.signWrapper}>
          <Text>Belum Memiliki Akun ? </Text>
          <Link
            title="Sign Up"
            onPress={() => linkToGo('Register')}
            style={styles.LinkToGo}
          />
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
  LinkToGo: {
    color: colors.default,
    fontWeight: 'bold',
  },
  space: value => {
    return {
      height: value,
    };
  },
});

export default Login;
