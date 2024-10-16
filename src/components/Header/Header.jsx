import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = ({ title, onMenuPress, onSettingsPress }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Menu Icon */}
      <TouchableOpacity onPress={onMenuPress}>
        <Icon name='home' // Replace with your menu icon path
          style={styles.iconStyle}
        />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.headerTitle}>{title}</Text>

      {/* Settings Icon */}
      <TouchableOpacity onPress={onSettingsPress}>
      <Icon name='gear' // Replace with your settings icon path
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#35a854', // Customize the header background color
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  iconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Header;
