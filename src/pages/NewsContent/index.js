import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconBackWhite} from '../../assets';
import FIREBASE from '../../config/FIREBASE';
import {colors} from '../../utills/colors';

export class NewsContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      berita: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('dataBerita/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let beritaItem = {...data};

        this.setState({
          berita: beritaItem,
        });
      });
  }
  render() {
    const {berita} = this.state;
    return (
      <View>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <View style={styles.headerDrawer}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <IconBackWhite />
            </TouchableOpacity>
          </View>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>LATEST NEWS</Text>
          </View>
          <View style={styles.headerRight}>
            <Image
              source={require('../../assets/logo/teams_tmlogo_tsx1530680365.png')}
              style={styles.headerImage}
            />
          </View>
        </View>

        <ScrollView style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            <View>
              <Image
                source={require('../../assets/img/166397159_124444879652655_7974507247414517410_n.jpg')}
                style={styles.imageContent}
              />
            </View>
          </View>

          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{berita.judul}</Text>
            <View style={styles.ketWrapper}>
              <Text style={styles.keterangan}>{berita.penulis}</Text>
              <Text>{berita.tanggalBerita}</Text>
            </View>
            <View>
              <Text style={styles.content}>{berita.isiBerita}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: 54,
    backgroundColor: colors.default,
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
    fontSize: 17,
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
  imageWrapper: {
    borderWidth: 1,
    borderColor: 'black',
    height: 450,
    width: '100%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  imageContent: {
    backgroundColor: 'lightgrey',
    height: 450,
    width: '100%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    resizeMode: 'cover',
  },
  btnWrapper: {
    backgroundColor: 'transparent',
  },
  buttonBack: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginTop: 20,
  },
  contentWrapper: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },
  ketWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  keterangan: {
    marginRight: 15,
    fontWeight: 'bold',
    color: 'grey',
  },
  content: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 45,
  },
});

export default NewsContent;
