import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

export default function index({
  title,
  onPress,
  score1,
  score2,
  team1,
  team2,
  ket,
}) {
  return (
    <TouchableOpacity style={styles.matchWrapper} onPress={onPress}>
      <Text style={styles.matchTitle}>{title}</Text>
      <View style={styles.match}>
        <View style={styles.teamIcon}>
          <Image source={team1} />
        </View>
        <Text style={styles.score}>{score1}</Text>
        <Text>{ket}</Text>
        <Text style={styles.score}>{score2}</Text>
        <View style={styles.teamIcon}>
          <Image source={team2} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
