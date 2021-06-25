import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'grey', flex: 1}}>
        {/* Header */}
        <View
          style={{
            height: 54,
            backgroundColor: 'green',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 54,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./src/img/logo/menu-white.png')}
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
              source={require('./src/img/logo/teams_tmlogo_tsx1530680365.png')}
              style={{width: 34, height: 34, marginRight: 8}}
            />
          </View>
        </View>

        {/* Content */}
        <ScrollView>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            {/* Headlines */}
            <View
              style={{
                backgroundColor: 'white',
                width: 335,
                height: 520,
                margin: 30,
                borderRadius: 20,
              }}>
              <Image
                source={require('./src/img/img/166397159_124444879652655_7974507247414517410_n.jpg')}
                style={{
                  width: 335,
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

            {/* Bagian News */}
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
                  NEWS
                </Text>
                <Text style={{marginRight: 20, marginTop: 5}}>
                  Show More >>
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'grey',
                  width: 352,
                  height: 200,
                  marginRight: 20,
                  marginLeft: 20,
                  borderRadius: 15,
                  marginTop: 10,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 10,
                    marginBottom: 10,
                    marginLeft: 25,
                    marginRight: 25,
                    fontWeight: 'bold',
                  }}>
                  Ini Judul Berita Lagi, Banyak amat yaa beritanya, masa isinya
                  berita doang
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View
          style={{
            height: 58,
            backgroundColor: 'white',
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: 'lightgrey',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./src/img/logo/teams_tmlogo_tsx1530680365.png')}
              style={{width: 24, height: 24}}
            />
            <Text
              style={{
                fontSize: 10,
                color: 'black',
                marginTop: 4,
                fontWeight: 'bold',
              }}>
              HOME
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./src/img/logo/stadium_32px.png')}
              style={{width: 28, height: 28}}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              MATCH
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./src/img/logo/jersey_24px.png')}
              style={{width: 26, height: 26}}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              TEAM
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./src/img/logo/shopping-cart.png')}
              style={{width: 26, height: 26}}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              STORE
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
