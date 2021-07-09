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
import {Items, Link, NewsItem} from '../../components';
import {colors} from '../../utills/colors';

const Home = ({navigation}) => {
  const LinkToGo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={{backgroundColor: 'grey', flex: 1}}>
      {/* Header */}
      <View
        style={{
          height: 54,
          backgroundColor: '#0d7250',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: 54,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/logo/menu-white.png')}
            style={{width: 22, height: 22, marginLeft: 6}}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            VAMOS FC
          </Text>
        </View>
        <View
          style={{
            width: 54,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/logo/teams_tmlogo_tsx1530680365.png')}
            style={{width: 34, height: 34, marginRight: 8}}
          />
        </View>
      </View>

      {/* Content */}
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* Headlines */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            scrollEventThrottle={200}
            pagingEnabled
            style={{paddingHorizontal: 20}}>
            <View
              style={{
                backgroundColor: 'white',
                width: 350,
                height: 520,
                marginVertical: 20,
                marginRight: 20,
                borderRadius: 20,
              }}>
              <Image
                source={require('../../assets/img/166397159_124444879652655_7974507247414517410_n.jpg')}
                style={{
                  width: 350,
                  height: 520,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginLeft: 20,
                  marginRight: 20,
                  position: 'absolute',
                  top: 350,
                }}>
                Ini Judul Berita 1 Vamos FC Mataram, Berita Tentang Pertandingan
                Pertama
              </Text>
            </View>

            <View
              style={{
                backgroundColor: 'white',
                width: 350,
                height: 520,
                marginVertical: 20,
                marginRight: 20,
                borderRadius: 20,
              }}>
              <Image
                source={require('../../assets/img/166397159_124444879652655_7974507247414517410_n.jpg')}
                style={{
                  width: 350,
                  height: 520,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginLeft: 20,
                  marginRight: 20,
                  position: 'absolute',
                  top: 350,
                }}>
                Ini Judul Berita 1 Vamos FC Mataram, Berita Tentang Pertandingan
                Pertama
              </Text>
            </View>

            <View
              style={{
                backgroundColor: 'white',
                width: 350,
                height: 520,
                marginVertical: 20,
                marginRight: 20,
                borderRadius: 20,
              }}>
              <Image
                source={require('../../assets/img/166397159_124444879652655_7974507247414517410_n.jpg')}
                style={{
                  width: 350,
                  height: 520,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginLeft: 20,
                  marginRight: 20,
                  position: 'absolute',
                  top: 350,
                }}>
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
            pagingEnabled>
            <View
              style={{
                borderColor: 'lightslategrey',
                borderWidth: 1,
                width: 352,
                height: 130,
                marginRight: 20,
                marginLeft: 20,
                borderRadius: 15,
                marginTop: 10,
              }}>
              <Text style={{textAlign: 'center', marginTop: 5}}>
                Pro Futsal League, Matchday 15 | 25/06/21
              </Text>
              <View
                style={{
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: 50, height: 50, backgroundColor: 'grey'}}>
                  <Image />
                </View>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>2</Text>
                <Text>FT</Text>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>2</Text>
                <View style={{width: 50, height: 50, backgroundColor: 'grey'}}>
                  <Image />
                </View>
              </View>
            </View>

            <View
              style={{
                borderColor: 'lightslategrey',
                borderWidth: 1,
                width: 352,
                height: 130,
                marginRight: 20,
                marginLeft: 20,
                borderRadius: 15,
                marginTop: 10,
              }}>
              <Text style={{textAlign: 'center', marginTop: 5}}>
                Pro Futsal League, Matchday 15 | 25/06/21
              </Text>
              <View
                style={{
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: 50, height: 50, backgroundColor: 'grey'}}>
                  <Image />
                </View>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>3</Text>
                <Text>FT</Text>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>1</Text>
                <View style={{width: 50, height: 50, backgroundColor: 'grey'}}>
                  <Image />
                </View>
              </View>
            </View>

            <View
              style={{
                borderColor: 'lightslategrey',
                borderWidth: 1,
                width: 352,
                height: 130,
                marginRight: 20,
                marginLeft: 20,
                borderRadius: 15,
                marginTop: 10,
              }}>
              <Text style={{textAlign: 'center', marginTop: 5}}>
                Pro Futsal League, Matchday 15 | 25/06/21
              </Text>
              <View
                style={{
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: 50, height: 50, backgroundColor: 'grey'}}>
                  <Image />
                </View>
                <Text style={{fontSize: 22, fontWeight: 'bold'}} />
                <Text>Sabtu, 26/06/21</Text>
                <Text style={{fontSize: 22, fontWeight: 'bold'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'grey'}}>
                  <Image />
                </View>
              </View>
            </View>
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
