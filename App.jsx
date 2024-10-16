import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Reading from './src/screens/Reading';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import OnBoarding from './src/screens/OnBoardingScreen/OnBoarding';
import TabNavigator from './src/navigators/TabNavigator';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import AllPoemsScreen from './src/screens/AllPoemScreen/AllPoemScreen'

const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Reading" component={Reading} />
        <Stack.Screen name="AllPoems" component={AllPoemsScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
