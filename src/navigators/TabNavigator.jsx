import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native-paper';

// Import your screens
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import InviteScreen from '../screens/InviteScreen/IniviteScreen';

// Create navigators
const Tab = createBottomTabNavigator();


// Bottom Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.label,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Invite') {
            iconName = 'gratipay';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          // Change icon color when focused
          return <Icon name={iconName} size={24} color={focused ? '#35a854' : '#000'} />;
        },
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? '#35a854' : '#000', fontSize: 15 }}>
            {route.name}
          </Text>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Invite" component={InviteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Drawer Navigator with Tab Navigator inside

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
    paddingTop: 6,
    paddingBottom: 6,
  },
  label: {
    fontSize: 15,
    color: '#000',
  },
});

export default TabNavigator;
