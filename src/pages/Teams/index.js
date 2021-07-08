import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';

const Teams = () => {
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
          <Text style={styles.headerTitle}>ALL MATCH</Text>
        </View>
        <View style={styles.headerRight}>
          <Image
            source={require('../../assets/logo/teams_tmlogo_tsx1530680365.png')}
            style={styles.headerImage}
          />
        </View>
      </View>

      {/* Content */}
      <ScrollView>
        <View style={styles.contentWrapper}>
          <Text>Ini Content</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.navWrapper}>
        <View style={styles.buttonWrapper}>
          <Image
            source={require('../../assets/logo/teams_tmlogo_tsx1530680365.png')}
            style={styles.iconNav}
          />
          <Text style={styles.iconTitle}>HOME</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Image
            source={require('../../assets/logo/stadium_32px.png')}
            style={styles.iconNav}
          />
          <Text style={styles.iconTitle}>MATCH</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Image
            source={require('../../assets/logo/jersey_24px.png')}
            style={styles.iconNav}
          />
          <Text style={styles.iconTitle}>TEAM</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Image
            source={require('../../assets/logo/shopping-cart.png')}
            style={styles.iconNav}
          />
          <Text style={styles.iconTitle}>STORE</Text>
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
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
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
