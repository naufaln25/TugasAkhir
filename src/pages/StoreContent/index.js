import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, ImageSlider} from '../../components';
import FIREBASE from '../../config/FIREBASE';
import ActionButton from './ActionButton';

export class StoreContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('dataApparel/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let storeItem = {...data};

        this.setState({
          store: storeItem,
        });
      });
  }

  render() {
    const {store} = this.state;

    const images = [
      require('../../assets/img/vamosfcmataram_20210710_1.jpg'),
      require('../../assets/img/vamosfcmataram_20210710_0.jpg'),
      require('../../assets/img/vamosfcmataram_20210710_2.jpg'),
    ];

    return (
      <View style={styles.wrapper}>
        <ImageSlider images={images} />
        <View style={styles.descWrapper}>
          <Text style={styles.title}>{store.namaItem}</Text>
          <Text style={styles.price}>{store.harga}</Text>
          <Button title="Beli Sekarang" />
          <ActionButton
            title="Kembali"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'black',
  },
  descWrapper: {
    padding: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
  },
  title: {fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase'},
  price: {fontSize: 16, marginTop: 8, marginBottom: 12},
});

export default StoreContent;
