import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import ActionButton from './ActionButton';
import {Button} from '../../components';

const WelcomeAuth = ({navigation}) => {
  const linkToGo = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../../assets/img/WelcomeAuth.png')}
        style={styles.imgBackground}>
        <View>
          {/* <Image
            source={require('../../assets/logo/teams_tmlogo_tsx1530680365.png')}
            style={styles.imageTitle}
          /> */}
          <Text style={styles.title}>Welcome To Vamos FC Futsal Fan App</Text>
          <Text style={styles.desc}>
            Ayo jadi fans nomor 1 Vamos FC. Cari berita terbaru dan informasi
            seputar Vamos FC Mataram
          </Text>
          <View style={styles.btnWrapper}>
            <Button title="Get Started" onPress={() => linkToGo('Home')} />
            <ActionButton title="Sign In" onPress={() => linkToGo('Login')} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0d7250',
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 320,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    width: 250,
    paddingHorizontal: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 5,
  },
  imageTitle: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 130,
    height: 130,
    marginBottom: 10,
    top: -130,
  },
  desc: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginTop: 15,
    top: 20,
  },
  btnWrapper: {
    marginHorizontal: 20,
    marginTop: 80,
  },
});

export default WelcomeAuth;
