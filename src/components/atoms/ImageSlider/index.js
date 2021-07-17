import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {IconBackWhite} from '../../../assets';

const {width} = Dimensions.get('window');
const height = (width * 100) / 75;

export default class ImageSlider extends Component {
  state = {
    active: 0,
  };

  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  };

  render() {
    return (
      <View>
        <TouchableOpacity style={{position: 'absolute'}}>
          <IconBackWhite />
        </TouchableOpacity>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.change}
          style={styles.wrapperImage}>
          {this.props.images.map((image, index) => (
            <ImageBackground key={index} source={image} style={styles.image} />
          ))}
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {this.props.images.map((i, k) => (
            <Text
              key={k}
              style={
                k === this.state.active
                  ? styles.paginationActive
                  : styles.pagination
              }>
              —
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperImage: {
    width,
    height,
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  paginationWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  pagination: {
    color: '#888',
    fontWeight: 'bold',
    fontSize: 28,
    margin: 3,
  },
  paginationActive: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    margin: 3,
  },
});
