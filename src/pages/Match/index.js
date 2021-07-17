import React, {Component} from 'react';
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
import {MatchItem} from '../../components/atoms';
import FIREBASE from '../../config/FIREBASE';

export class Match extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: {},
      matchKey: [],
    };
  }

  componentDidMount() {
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
    const {match, matchKey} = this.state;
    return (
      <View style={styles.wrapper}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <View style={styles.headerDrawer} />
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
        <ScrollView
          style={styles.contentWrapper}
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          scrollEventThrottle={200}>
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
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  matchWrapper: {
    borderColor: 'lightslategrey',
    borderWidth: 1,
    width: 352,
    height: 130,
    borderRadius: 15,
    marginBottom: 20,
  },
  matchTitle: {textAlign: 'center', marginTop: 5},
  match: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamIcon: {width: 50, height: 50, backgroundColor: 'grey'},
  score: {fontSize: 22, fontWeight: 'bold'},
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

export default Match;
