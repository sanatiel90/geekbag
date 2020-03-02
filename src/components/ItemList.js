import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

function ItemList({ title, genre, rating }) {
  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.titleGenre}>{genre}</Text>
        <AirbnbRating
          size={14}
          showRating={false}
          starStyle={{ marginVertical: 10 }}
          isDisabled={true}
          defaultRating={rating}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    marginVertical: 4,
  },

  leftContainer: {
    flex: 1.3,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0091EA',
    borderRadius: 4,
  },

  titleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  titleGenre: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },
});

export default ItemList;
