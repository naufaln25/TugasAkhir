import React from 'react';
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
import {Items, Link, NewsItem, MatchItem} from '../../components';
import {colors} from '../../utills/colors';

const Home = ({navigation}) => {
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
          {/* Headlines */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            scrollEventThrottle={200}
            pagingEnabled
            style={styles.headWrapper}>
            <View style={styles.headlineWrapper}>
              <Image
                source={require('../../assets/img/166397159_124444879652655_7974507247414517410_n.jpg')}
                style={styles.headlineImage}
              />
              <Text style={styles.headlineTitle}>
                Ini Judul Berita 1 Vamos FC Mataram, Berita Tentang Pertandingan
                Pertama
              </Text>
            </View>

            <View style={styles.headlineWrapper}>
              <Image
                source={require('../../assets/img/166397159_124444879652655_7974507247414517410_n.jpg')}
                style={styles.headlineImage}
              />
              <Text style={styles.headlineTitle}>
                Ini Judul Berita 1 Vamos FC Mataram, Berita Tentang Pertandingan
                Pertama
              </Text>
            </View>

            <View style={styles.headlineWrapper}>
              <Image
                source={require('../../assets/img/166397159_124444879652655_7974507247414517410_n.jpg')}
                style={styles.headlineImage}
              />
              <Text style={styles.headlineTitle}>
                Ini Judul Berita 1 Vamos FC Mataram, Berita Tentang Pertandingan
                Pertama
              </Text>
            </View>
          </ScrollView>

          {/* Bagian Upcoming Match */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            scrollEventThrottle={200}
            pagingEnabled
            style={styles.matcWrapper}>
            <MatchItem
              title="Pro Futsal League, Matchday 15 | 25/06/21"
              score1="2"
              score2="0"
              ket="FT"
            />

            <MatchItem
              title="Pro Futsal League, Matchday 15 | 25/06/21"
              score1="2"
              score2="0"
              ket="FT"
            />

            <MatchItem
              title="Pro Futsal League, Matchday 15 | 25/06/21"
              score1="-"
              score2="-"
              ket="15.00"
            />
          </ScrollView>

          {/* Bagian News */}
          <View style={styles.itemWrapper}>
            <View style={styles.itemTitle}>
              <Text style={styles.title}>NEWS</Text>
              <Link
                onPress={() => LinkToGo('News')}
                title="Show More"
                style={styles.LinkToGo}
              />
            </View>

            <NewsItem title="Ini Judul 1" />
            <NewsItem title="Ini Judul 1" />
            <NewsItem title="Ini Judul 1" />
          </View>

          {/* Bagian Store Front */}
          <View style={styles.itemWrapper}>
            <View style={styles.itemTitle}>
              <Text style={styles.title}>STORE</Text>
              <Link
                onPress={() => LinkToGo('Store')}
                title="Show More"
                style={styles.LinkToGo}
              />
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
              scrollEventThrottle={200}>
              <Items title="NEW HOME KIT 20/21" />
              <Items title="NEW AWAY KIT 20/21" />
              <Items title="NEW THIRD KIT 20/21" />
            </ScrollView>
          </View>
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
