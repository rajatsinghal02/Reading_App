import { StyleSheet, Text, View } from 'react-native'
import React, { Component, useEffect } from 'react'
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar'
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
    
    useEffect(()=>{
        setTimeout(()=>{
        navigation.navigate('OnBoarding')
        },2000)
    })
  
    return (
       <CustomStatusBar statusBgColor="#fff">
          <View style={styles.container}>
          <Animatable.Image
          duration={2000} animation="fadeInUp"
          style={styles.stretch}
          source={require('../../assets/icon.png')}
        />
         <Animatable.Text 
                    duration={2000} 
                    animation="fadeInUp" 
                    style={styles.text}
                >
                    Vaakya
                </Animatable.Text>
        </View>
        </CustomStatusBar>
    );
  };
  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#35a854',  // Same as the status bar background color for consistency
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,  // Add some spacing between image and text
        letterSpacing: 2,  // Add letter spacing for a modern look
        fontFamily: 'sans-serif-medium',  // Change the font style if needed
    },
    stretch: {
        width: 150,
        height: 150,
    },
});

export default SplashScreen