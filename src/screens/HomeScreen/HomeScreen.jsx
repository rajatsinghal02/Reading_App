import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar';
import { useNavigation } from '@react-navigation/native';

// Dummy data for poem categories and cards
const poems = [
  {
    id: 1,
    title: 'Twinkle Twinkle Little Star',
    category: 'Nature',
    image: require('../../assets/twinkle.jpg'),
    text: `Twinkle, twinkle, little star, How I wonder what you are! Up above the world so high, Like a diamond in the sky. Twinkle, twinkle, little star, How I wonder what you are!`,
  },
  {
    id: 2,
    title: 'Hickory Dickory Dock',
    category: 'Adventure',
    image: require('../../assets/hickory.jpg'),
    text: `Hickory dickory dock, The mouse ran up the clock. The clock struck one, The mouse ran down. Hickory dickory dock.`,

  },
  {
    id: 3,
    title: 'Baa Baa Black Sheep',
    category: 'Fantasy',
    image: require('../../assets/Baa.jpg'),
    text:`Baa, baa, black sheep, Have you any wool? Yes sir, yes sir, Three bags full. One for the master, One for the dame, And one for the little boy Who lives down the lane.`,
  },
  {
    id: 4,
    title: 'The Brave Little Rabbit',
    category: 'Animal Tales',
    image: require('../../assets/rabbit.jpg'),
    text:`Baa, baa, black sheep, Have you any wool? Yes sir, yes sir, Three bags full. One for the master, One for the dame, And one for the little boy Who lives down the lane.`,
 
  },
  // Add more poems as needed
];

const HomeScreen = ({navigation}) => {
  return (
    <CustomStatusBar statusBgColor="#FFFFFF">
      <View style={styles.container}>
        
        {/* Header */}
        <Text style={styles.title}>Explore Magical Poems</Text>
        <Text style={styles.subtitle}>Curated stories for young minds</Text>
        {/* Poem Cards */}
        <FlatList
          data={poems}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.poemGrid}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.poemCard}
              onPress={() => navigation.navigate('Reading', { poemTitle: item.title, poemText: item.text })}
            >
              <Image source={item.image} style={styles.poemImage} />
              <Text style={styles.poemTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
            </View>
    </CustomStatusBar>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#35a854',
    marginVertical: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },
  poemGrid: {
    alignItems: 'center',
  },
  poemCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    margin: 10,
    width: '45%',
    padding: 10,
    alignItems: 'center',
  },
  poemImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  poemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default HomeScreen;
