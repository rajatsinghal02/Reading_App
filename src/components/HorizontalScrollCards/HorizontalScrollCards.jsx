import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';

const HorizontalScrollCards = () => {
  // Sample data for the cards
  const cardsData = [
    {
      id: 1,
      title: 'Card 1',
      image: require('../../assets/Baa.jpg'), // Replace with your image path
    },
    {
      id: 2,
      title: 'Card 2',
      image: require('../../assets/Baa.jpg'),
    },
    {
      id: 3,
      title: 'Card 3',
      image: require('../../assets/Baa.jpg'),
    },
    {
      id: 4,
      title: 'Card 4',
      image: require('../../assets/Baa.jpg'),
    },
    {
      id: 5,
      title: 'Card 5',
      image: require('../../assets/Baa.jpg'),
    },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
      {cardsData.map((card) => (
        <View key={card.id} style={styles.card}>
          <Image source={card.image} style={styles.image} />
          <Text style={styles.title}>{card.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },
  card: {
    width: 150, // Width of each card
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  image: {
    width: '100%', // Full width of the card
    height: 100, // Height of the image
    resizeMode: 'cover',
  },
  title: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HorizontalScrollCards;
