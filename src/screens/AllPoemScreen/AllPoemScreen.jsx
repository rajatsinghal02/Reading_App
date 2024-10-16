import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import poemsData from '../../assets/Data/poems.json'; // Adjust the path as necessary
import defaultIcon from '../../assets/icon.png'; // Make sure to add a default icon

const AllPoemsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params; // Get the category from the route params
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    // Filter poems by the selected category
    const filteredPoems = poemsData.filter(poem => poem.category === category);
    setPoems(filteredPoems);
  }, [category]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.poemCard}
      onPress={() => navigation.navigate('Reading', { poemTitle: item.title, poemText: item.text })}
    >
      <Image source={defaultIcon} style={styles.icon} />
      <Text style={styles.poemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} Poems</Text>
      <FlatList
        data={poems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light gray background
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#35a854',
    marginBottom: 20,
    textAlign: 'center',
  },
  poemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 15,
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10, // Space between the icon and the title
  },
  poemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
});

export default AllPoemsScreen;
