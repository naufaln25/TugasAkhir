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
import {Items, Link, MatchItem, NewsItem} from '../../components';
import FIREBASE from '../../config/FIREBASE';
import {colors} from '../../utills/colors';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: {},
      match: {},
      store: {},
      storeKey: [],
      matchKey: [],
      newsKey: [],
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('dataBerita')
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let newsItem = {...data};

        this.setState({
          news: newsItem,
          newsKey: Object.keys(newsItem),
        });
      });

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

    FIREBASE.database()
      .ref('dataMatch')
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let matchItem = {...data};

        this.setState({
          match: matchItem,
          matchKey: Object.keys(matchItem),
        });
      });
  }

  render() {
    const {news, newsKey, store, storeKey, match, matchKey} = this.state;
    return (
      <View style={styles.wrapper}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <View style={styles.headerDrawer} />
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>VAMOS FC</Text>
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
            {/* Headlines */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
              scrollEventThrottle={200}
              style={styles.headWrapper}>
              {newsKey.length > 0 ? (
                newsKey.map(key => (
                  <TouchableOpacity
                    style={styles.headlineWrapper}
                    onPress={() =>
                      this.props.navigation.navigate('NewsContent', {id: key})
                    }>
                    <Image
                      source={require('../../assets/img/166397159_124444879652655_7974507247414517410_n.jpg')}
                      style={styles.headlineImage}
                    />
                    <Text style={styles.headlineTitle}>{news[key].judul}</Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text>Match Tidak Tersedia</Text>
              )}
            </ScrollView>

            {/* Bagian Upcoming Match */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
              scrollEventThrottle={200}
              style={styles.matcWrapper}>
              {matchKey.length > 0 ? (
                matchKey.map(key => (
                  <MatchItem
                    key={key}
                    title={match[key].namaMatch}
                    tanggal={match[key].tanggal}
                    score1={match[key].skor1}
                    score2={match[key].skor2}
                    team1={match[key].tim1}
                    team2={match[key].tim2}
                    ket={match[key].ket}
                    id={key}
                  />
                ))
              ) : (
                <Text>Match Tidak Tersedia</Text>
              )}
            </ScrollView>

            {/* Bagian News */}
            <View style={styles.itemWrapper}>
              <View style={styles.itemTitle}>
                <Text style={styles.title}>NEWS</Text>
                <Link
                  onPress={() => this.props.navigation.navigate('News')}
                  title="Show More"
                  style={styles.LinkToGo}
                />
              </View>

              <ScrollView horizontal>
                {newsKey.length > 0 ? (
                  newsKey.map(key => (
                    <TouchableOpacity
                      style={styles.newsWrappper}
                      onPress={() =>
                        this.props.navigation.navigate('NewsContent', {id: key})
                      }>
                      <View>
                        <Image
                          style={styles.imageNews}
                          source={require('../../assets/img/news/b4.jpg')}
                        />
                      </View>
                      <Text style={styles.titleNews}>{news[key].judul}</Text>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text>Match Tidak Tersedia</Text>
                )}
              </ScrollView>
            </View>

            {/* Bagian Store Front */}
            <View style={styles.itemWrapper}>
              <View style={styles.itemTitle}>
                <Text style={styles.title}>STORE</Text>
                <Link
                  onPress={() => this.props.navigation.navigate('Store')}
                  title="Show More"
                  style={styles.LinkToGo}
                />
              </View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                scrollEventThrottle={200}
                style={styles.sectionWrapper}>
                {storeKey.length > 0 ? (
                  storeKey.map(key => (
                    <Items
                      key={key}
                      title={store[key].namaItem}
                      onPress={() =>
                        this.props.navigation.navigate('StoreContent', {
                          id: key,
                        })
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

export default Home;

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
  contentWrapper: {flex: 1, backgroundColor: 'white'},
  itemTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {fontWeight: 'bold', fontSize: 20},
  itemWrapper: {
    padding: 20,
    marginVertical: 10,
  },
  imageNews: {
    backgroundColor: 'grey',
    width: 352,
    height: 180,
    borderRadius: 10,
  },
  titleNews: {
    position: 'absolute',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    top: 100,
    paddingHorizontal: 15,
  },
  newsWrappper: {
    borderRadius: 10,
    width: 352,
    height: 180,
    marginBottom: 20,
    marginRight: 20,
  },
  LinkToGo: {
    color: colors.dark,
    top: 5,
  },
  headWrapper: {paddingHorizontal: 20},
  headlineWrapper: {
    backgroundColor: 'white',
    width: 350,
    height: 520,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 20,
  },
  headlineImage: {
    width: 350,
    height: 520,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headlineTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    position: 'absolute',
    bottom: 30,
  },
  matcWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  storeWrapper: {
    width: '100%',
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
