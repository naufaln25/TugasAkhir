import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavMatch, NavStore, NavTeam} from '../../assets';
import NavHome from '../../assets/logo/teams_tmlogo_tsx1530680365.png';
import {Items} from '../../components';
import FIREBASE from '../../config/FIREBASE';

export class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: {},
      storeKey: [],
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('dataApparel')
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let storeItem = {...data};

        this.setState({
          store: storeItem,
          storeKey: Object.keys(storeItem),
        });
      });
  }

  render() {
    const {store, storeKey} = this.state;
    return (
      <View style={styles.wrapper}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <View style={styles.headerDrawer} />
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
          <View>
            <Image
              source={require('../../assets/img/vamosfcmataram_20210710_3.jpg')}
              style={styles.shopHeadline}
            />
            <Text style={styles.headlineTitle}>NEW HOME KIT 2020/2021</Text>
          </View>
          <View style={styles.storeWrapper}>
            <Text style={styles.storeTitle}>ALL ITEM</Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              decelerationRate="fast"
              scrollEventThrottle={200}
              style={styles.sectionWrapper}>
              {storeKey.length > 0 ? (
                storeKey.map(key => (
                  <Items
                    key={key}
                    title={store[key].namaItem}
                    onPress={() =>
                      this.props.navigation.navigate('StoreContent', {id: key})
                    }
                    id={key}
                    source={require('../../assets/img/vamosfcmataram_20210710_1.jpg')}
                  />
                ))
              ) : (
                <Text>Item Tidak Tersedia</Text>
              )}
            </ScrollView>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.navWrapper}>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Image source={NavHome} style={styles.iconNav} />
            <Text style={styles.iconTitle}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => this.props.navigation.navigate('Match')}>
            <NavMatch width="24" height="24" />
            <Text style={styles.iconTitle}>MATCH</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => this.props.navigation.navigate('Teams')}>
            <NavTeam width="24" height="24" />
            <Text style={styles.iconTitle}>TEAM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => this.props.navigation.navigate('Store')}>
            <NavStore width="24" height="24" />
            <Text style={styles.iconTitle}>STORE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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
    width: '100%',
    resizeMode: 'cover',
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
