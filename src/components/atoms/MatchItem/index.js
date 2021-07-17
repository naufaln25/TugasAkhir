import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function index({
  title,
  tanggal,
  score1,
  score2,
  team1,
  team2,
  ket,
  id,
}) {
  return (
    <View style={styles.matchWrapper}>
      <Text style={styles.matchTitle}>
        {title} | {tanggal}
      </Text>
      <View style={styles.match}>
        <View>
          <Image source={{uri: team1}} style={styles.teamIcon} />
        </View>
        <Text style={styles.score}>{score1}</Text>
        <Text>{ket}</Text>
        <Text style={styles.score}>{score2}</Text>
        <View>
          <Image source={{uri: team2}} style={styles.teamIcon} />
        </View>
      </View>
    </View>
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
    marginRight: 15,
  },
  matchTitle: {textAlign: 'center', marginTop: 5},
  match: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamIcon: {width: 50, height: 50},
  score: {fontSize: 22, fontWeight: 'bold'},
});
