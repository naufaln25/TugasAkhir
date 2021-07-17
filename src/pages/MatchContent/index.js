import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {IconBackWhite} from '../../assets';

const MatchContent = ({navigation}) => {
  return (
    <View>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.headerDrawer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconBackWhite />
          </TouchableOpacity>
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>MATCH</Text>
        </View>
        <View style={styles.headerRight}>
          <Image
            source={require('../../assets/logo/teams_tmlogo_tsx1530680365.png')}
            style={styles.headerImage}
          />
        </View>
      </View>

      <View>
        <ImageBackground
          source={require('../../assets/img/backgroundMatch.png')}
          style={styles.imageBackground}>
          <Text style={styles.matchTitle}>
            Pro Futsal League, Matchday 15 | 25/06/21
          </Text>
        </ImageBackground>
        <View style={styles.scoreWrapper}>
          <View style={styles.teamIcon}>
            <Image />
          </View>
          <Text style={styles.score}>2</Text>
          <Text style={styles.keterangan}>FT</Text>
          <Text style={styles.score}>2</Text>
          <View style={styles.teamIcon}>
            <Image />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'grey',
    flex: 1,
  },
  headerWrapper: {
    height: 54,
    backgroundColor: '#0d7250',
    flexDirection: 'row',
  },
  headerDrawer: {
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconDrawer: {
    width: 22,
    height: 22,
    marginLeft: 6,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  headerRight: {
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 34,
    height: 34,
    marginRight: 8,
  },

  imageBackground: {width: '100%', height: 250, resizeMode: 'cover'},
  scoreWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    position: 'absolute',
    width: '100%',
    height: 250,
    alignItems: 'center',
  },
  matchTitle: {
    textAlign: 'center',
    marginTop: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  score: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  keterangan: {
    color: 'white',
  },
  teamIcon: {
    backgroundColor: 'grey',
    width: 80,
    height: 80,
  },
});

export default MatchContent;
