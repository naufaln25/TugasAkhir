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
import {Items} from '../../components';

const Store = ({navigation}) => {
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
          <Text style={styles.headerTitle}>STORE</Text>
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
        <View style={styles.shopHeadline}>
          <Image />
          <Text style={styles.headlineTitle}>NEW HOME KIT 2020/2021</Text>
        </View>

        <View style={styles.storeWrapper}>
          <Text style={styles.storeTitle}>NEW KIT 2020/2021</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            scrollEventThrottle={200}
            style={styles.sectionWrapper}>
            <Items title="NEW HOME KIT 20/21" />
            <Items title="NEW AWAY KIT 20/21" />
            <Items title="NEW THIRD KIT 20/21" />
          </ScrollView>

          <Text style={styles.storeTitle}>SPECIAL EDITION</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            scrollEventThrottle={200}
            style={styles.sectionWrapper}>
            <Items title="T-SHIRT CHAMPIONS 2018" />
            <Items title="HOME KIT SPECIAL EDITION (Threepeat)" />
            <Items title="NEW THIRD KIT 20/21" />
          </ScrollView>

          <Text style={styles.storeTitle}>KIT 2019/2020</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            scrollEventThrottle={200}
            style={styles.sectionWrapper}>
            <Items title="HOME KIT 19/20" />
            <Items title="AWAY KIT 19/20" />
            <Items title="THIRD KIT 19/20" />
          </ScrollView>

          <Text style={styles.storeTitle}>AFC KIT 2019</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            scrollEventThrottle={200}
            style={styles.sectionWrapper}>
            <Items title="AFC HOME KIT 2019" />
            <Items title="AFC AWAY KIT 2019" />
            <Items title="AFC THIRD KIT 2019" />
          </ScrollView>
        </View>
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
  },
  shopHeadline: {
    backgroundColor: 'grey',
    height: 280,
  },
  headlineTitle: {
    color: 'white',
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
    top: 170,
  },
  storeWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  storeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionWrapper: {
    marginBottom: 25,
  },

  // Bottom Navigation
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

export default Store;
