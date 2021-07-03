import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import ActionButton from './ActionButton';

const WelcomeAuth = () => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../../assets/img/WelcomeAuth.png')}
        style={styles.imgBackground}>
        <View>
          <Image
            source={require('../../assets/logo/teams_tmlogo_tsx1530680365.png')}
            style={styles.imageTitle}
          />
          <Text style={styles.title}>Welcome To Vamos FC Futsal Fan App</Text>
          <Text style={styles.desc}>
            Lihat langsung semua informasi tentang Vamos FC dan Semua Profile
            Pemain
          </Text>
          <View>
            <ActionButton title="Get Started" />
            <ActionButton title="Login / Sign Up" />
          </View>
          <View>
            <Text style={styles.textCopy}>Copyright Kelompok 5 06TPLP12</Text>
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
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    width: 250,
    paddingHorizontal: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    top: -30,
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
    paddingHorizontal: 40,
    marginTop: 10,
  },
  textCopy: {
    color: 'white',
    fontSize: 10,
    top: 150,
    textAlign: 'center',
  },
});

export default WelcomeAuth;
