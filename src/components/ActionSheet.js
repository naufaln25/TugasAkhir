import React from 'react';
import {useState} from 'react';
import {Dimensions, StyleSheet, Text, View, Animated} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

export default function ActionSheet(props) {
  const [alignment] = useState(new Animated.Value(0));
  const bringUpActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  const hideTheActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
    }).start();
  };

  const actionSheetInterpolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-height / 2.4 + 50, 0],
  });

  const actionSheetStyle = {
    bottom: actionSheetInterpolate,
  };

  const gestureHandler = e => {
    if (e.nativeEvent.contentOffset.y > 0) {
      bringUpActionSheet();
    } else if (e.nativeEvent.contentOffset.y < 0) {
      hideTheActionSheet();
    }
  };

  return (
    <Animated.View style={[styles.wrapper, actionSheetStyle]}>
      <View>
        <ScrollView onScroll={e => gestureHandler(e)} style={styles.grabber} />
      </View>
      <Text>ActionSheet</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height / 2.4,
    width: width / 1.05,
    borderTopRightRadius: 40,
    marginHorizontal: 10,
  },
  grabber: {
    width: 60,
    borderTopWidth: 5,
    borderTopColor: '#aaa',
  },
});
