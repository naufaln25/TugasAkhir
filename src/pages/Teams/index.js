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
import FIREBASE from '../../config/FIREBASE';

export class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: {},
      teamKey: [],
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('dataPemain')
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let teamItem = {...data};

        this.setState({
          team: teamItem,
          teamKey: Object.keys(teamItem),
        });
      });
  }

  render() {
    const {team, teamKey} = this.state;
    return (
      <View style={styles.wrapper}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <View style={styles.headerDrawer} />
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
          <Text style={styles.position}>All Player</Text>
          {teamKey.length > 0 ? (
            teamKey.map(key => (
              <TouchableOpacity
                style={styles.playerWrapper}
                onPress={() =>
                  this.props.navigation.navigate('Player', {id: key})
                }>
                <View style={styles.playerImage}>
                  <Image />
                </View>
                <Text style={styles.kitNumber}>{team[key].no}</Text>
                <Text style={styles.playerName}>{team[key].namaPemain}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text>Item Tidak Tersedia</Text>
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
            <Text style={styles.iconTitle}>team</Text>
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
    textAlign: 'center',
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
