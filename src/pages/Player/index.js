import React, {Component, createRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {IconBackWhite} from '../../assets';
import FIREBASE from '../../config/FIREBASE';
import {colors} from '../../utills/colors';

export class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pemain: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('dataPemain/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let pemainItem = {...data};

        this.setState({
          pemain: pemainItem,
        });
      });
  }
  render() {
    const {pemain} = this.state;
    const actionSheetRef = createRef();
    let actionSheet;
    return (
      <View>
        <View>
          <View>
            <Image
              source={require('../../assets/img/WelcomeAuth.png')}
              style={styles.profileImage}
            />
            <TouchableOpacity
              style={styles.btnBack}
              onPress={() => this.props.navigation.goBack()}>
              <IconBackWhite width="30" height="30" />
            </TouchableOpacity>

            <View style={styles.textWrapper}>
              <Text style={styles.number}>{pemain.no}</Text>
              <Text style={styles.positionTeam}>{pemain.posisi}</Text>
              <Text style={styles.namePlayer}>{pemain.namaPemain}</Text>
            </View>

            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => {
                  actionSheetRef.current?.setModalVisible();
                }}>
                <Text style={styles.btnTitle}>Lihat Profile</Text>
              </TouchableOpacity>

              <ActionSheet ref={actionSheetRef}>
                <View style={styles.profileWrapper}>
                  <Text style={styles.profileTitle}>PROFILE</Text>
                  <Text style={styles.content}>Nama : {pemain.namaPemain}</Text>
                  <Text style={styles.content}>No. Punggung :{pemain.no}</Text>
                  <Text style={styles.content}>Posisi : {pemain.posisi}</Text>
                  <Text style={styles.content}>
                    Tanggal Lahir : {pemain.tanggal}
                  </Text>
                  <Text style={styles.content}>
                    Former Club : {pemain.exTim}
                  </Text>
                  <Text style={styles.content}>
                    Jumlah Goal : {pemain.jumlahGoal}
                  </Text>
                  <Text style={styles.content}>
                    Jumlah Cleansheet : {pemain.cleansheet}
                  </Text>
                </View>
              </ActionSheet>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileImage: {
    width: '100%',
    height: 760,
    resizeMode: 'cover',
  },
  btnBack: {
    position: 'absolute',
    paddingTop: 30,
    paddingLeft: 20,
  },
  textWrapper: {
    position: 'absolute',
    marginLeft: 20,
    bottom: 120,
    paddingRight: 50,
  },
  btn: {
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    bottom: 40,
    height: 40,
    width: '60%',
    borderRadius: 20,
    marginHorizontal: 80,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  btnTitle: {color: colors.default, fontWeight: 'bold'},
  number: {
    color: 'white',
    fontSize: 100,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  positionTeam: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  namePlayer: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  profileTitle: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 15,
    color: 'black',
  },
  profileWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  content: {
    fontSize: 16,
    color: colors.default,
    marginBottom: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
});

export default Player;
