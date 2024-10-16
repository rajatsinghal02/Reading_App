import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Pressable, ScrollView } from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar';
import { useNavigation } from '@react-navigation/native';

// Import the JSON file
import poemsData from '../../assets/Data/poems.json'; // Adjust the path as necessary

const images = {
  'twinkle.jpg': require('../../assets/twinkle.jpg'),
  'hickory.jpg': require('../../assets/hickory.jpg'),
  'Baa.jpg': require('../../assets/Baa.jpg'),
  'rabbit.jpg': require('../../assets/rabbit.jpg'),
  'icon.png': require('../../assets/icon.png'),
  // Add more images as needed
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPoems(poemsData);
    };

    fetchData();
  }, []);

  // Function to get unique categories from the poems
  const getUniqueCategories = () => {
    return [...new Set(poems.map(poem => poem.category))];
  };

  // Function to filter poems by category
  const getPoemsByCategory = (category) => {
    return poems.filter(poem => poem.category === category).slice(0, 5);
  };

  const categories = getUniqueCategories();

  return (
    <CustomStatusBar statusBgColor="#FFFFFF">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Header */}
          <Text style={styles.title}>Explore Magical Poems</Text>
          <Text style={styles.subtitle}>Curated stories for young minds</Text>

          {/* Render FlatLists for each category */}
          {categories.map((category, index) => (
            <View key={index} style={styles.categoryContainer}>
              {/* Category Heading */}
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryTitle}>{category}</Text>
                <Pressable style={styles.viewAllButton} onPress={() => navigation.navigate('AllPoems', { category })}>
                  <Text style={styles.viewAllText}>View All</Text>
                </Pressable>
              </View>

              {/* Horizontal Scrollable Poem Cards for the category */}
              <FlatList
                data={getPoemsByCategory(category)}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                contentContainerStyle={styles.poemGrid}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.poemCard}
                    onPress={() => navigation.navigate('Reading', { poemTitle: item.title, poemText: item.text })}
                  >
                    <Image source={images[item.image]} style={styles.poemImage} />
                    <Text style={styles.poemTitle}>{item.title}</Text>
                  </TouchableOpacity>
                )}
                style={styles.flatList}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </CustomStatusBar>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 80, // Increase bottom padding to accommodate tab navigation
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center', // Center items horizontally
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#35a854',
    marginVertical: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 5,
    width: '100%', // Ensure full width for the category container
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#35a854',
  },
  viewAllButton: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    elevation: 2,
  },
  viewAllText: {
    color: '#35a854',
    fontWeight: 'bold',
  },
  poemGrid: {
    paddingBottom: 20,
    height: 240,
  },
  poemCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    margin: 10,
    width: 160,
    height: 220,
    padding: 10,
    alignItems: 'center',
  },
  poemImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  poemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  flatList: {
    marginBottom: 20, // Add margin to the bottom of each FlatList for spacing
  },
});

export default HomeScreen;
