import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2500);
  });
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/splashScreen.png')}
        style={styles.imgBackground}>
        <Image
          source={require('../../assets/logo/teams_tmlogo_tsx1530680365.png')}
          style={styles.imgTitle}
        />
        <Text style={styles.title}>Unofficial App of Vamos FC Mataram</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  imgTitle: {
    width: 140,
    height: 140,
    marginRight: 'auto',
    marginLeft: 'auto',
    top: -80,
  },
  wrapperHead: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    marginTop: 30,
  },
  title: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Segoe UI',
    textAlign: 'center',
    bottom: -270,
  },
});

export default Splash;
