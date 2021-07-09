import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavMatch, NavStore, NavTeam} from '../../assets';
import NavHome from '../../assets/logo/teams_tmlogo_tsx1530680365.png';

const Teams = ({navigation}) => {
  const LinkToGo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.headerDrawer}>
          <Image
            source={require('../../assets/logo/menu-white.png')}
            style={styles.iconDrawer}
          />
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>TEAMS</Text>
        </View>
        <View style={styles.headerRight}>
          <Image
            source={require('../../assets/logo/teams_tmlogo_tsx1530680365.png')}
            style={styles.headerImage}
          />
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.contentWrapper}>
        <Text style={styles.position}>Goalkeeper</Text>
        <TouchableOpacity style={styles.playerWrapper}>
          <View style={styles.playerImage}>
            <Image />
          </View>
          <Text style={styles.kitNumber}>1</Text>
          <Text style={styles.playerName}>Muhammad Al Bagir</Text>
        </TouchableOpacity>

        <Text style={styles.position}>Anchor</Text>
        <TouchableOpacity style={styles.playerWrapper}>
          <View style={styles.playerImage}>
            <Image />
          </View>
          <Text style={styles.kitNumber}>1</Text>
          <Text style={styles.playerName}>Muhammad Al Bagir</Text>
        </TouchableOpacity>

        <Text style={styles.position}>Flank</Text>
        <TouchableOpacity style={styles.playerWrapper}>
          <View style={styles.playerImage}>
            <Image />
          </View>
          <Text style={styles.kitNumber}>1</Text>
          <Text style={styles.playerName}>Muhammad Al Bagir</Text>
        </TouchableOpacity>

        <Text style={styles.position}>Pivot</Text>
        <TouchableOpacity style={styles.playerWrapper}>
          <View style={styles.playerImage}>
            <Image />
          </View>
          <Text style={styles.kitNumber}>1</Text>
          <Text style={styles.playerName}>Muhammad Al Bagir</Text>
        </TouchableOpacity>
        <View style={styles.space} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.navWrapper}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => LinkToGo('Home')}>
          <Image source={NavHome} style={styles.iconNav} />
          <Text style={styles.iconTitle}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => LinkToGo('Match')}>
          <NavMatch width="24" height="24" />
          <Text style={styles.iconTitle}>MATCH</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => LinkToGo('Teams')}>
          <NavTeam width="24" height="24" />
          <Text style={styles.iconTitle}>TEAM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => LinkToGo('Store')}>
          <NavStore width="24" height="24" />
          <Text style={styles.iconTitle}>STORE</Text>
        </TouchableOpacity>
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

  // Content
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  playerWrapper: {
    borderWidth: 1,
    borderRadius: 10,
    width: 352,
    height: 120,
    marginBottom: 20,
  },
  playerImage: {
    backgroundColor: 'grey',
    width: 352,
    height: 120,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  playerName: {
    position: 'absolute',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    top: 70,
    paddingHorizontal: 15,
  },
  kitNumber: {
    position: 'absolute',
    color: 'white',
    fontSize: 34,
    paddingTop: 12,
    paddingHorizontal: 15,
  },
  position: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  space: {
    height: 20,
  },

  // BottomNavigation
  navWrapper: {
    height: 58,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey',
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconNav: {
    width: 24,
    height: 24,
  },
  iconTitle: {
    fontSize: 10,
    color: 'black',
    marginTop: 4,
    fontWeight: 'bold',
  },
});

export default Teams;
