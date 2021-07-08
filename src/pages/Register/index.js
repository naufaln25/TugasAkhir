import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Input, Link} from '../../components';
import {setForm} from '../../redux';

const Register = ({navigation}) => {
  const {form} = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();
  // const [form, setForm] = useState({
  //   fullName: '',
  //   userName: '',
  //   email: '',
  //   password: '',
  //   rePassword: '',
  // });

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
        <Text style={styles.Title}>Create New Account</Text>
        <View />
      </View>

      {/* Content */}
      <View style={styles.wrapper}>
        <Input
          placeholder="Nama Lengkap"
          value={form.fullName}
          onChangeText={value => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(20)} />
        <Input
          placeholder="Username"
          value={form.userName}
          onChangeText={value => onInputChange(value, 'userName')}
        />
        <View style={styles.space(20)} />
        <Input
          placeholder="Email"
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(20)} />
        <Input
          placeholder="Password"
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(20)} />
        <Input
          placeholder="Re-Enter Password"
          value={form.rePassword}
          onChangeText={value => onInputChange(value, 'rePassword')}
          secureTextEntry={true}
        />
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
