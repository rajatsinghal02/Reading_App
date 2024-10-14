import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar';
import Swiper from 'react-native-swiper';
import {Image} from 'react-native-animatable';

const OnBoarding = ({navigation}) => {
  const slides = [
    {
      id: 1,
      heading: 'Discover the Joy of Reading',
      image: require('../../assets/OnBoardingOne.jpg'),
      subtitle: 'Vaakya Reading opens up a world of fun stories, designed just for kids.',
    },
    {
      id: 2,
      heading: 'Interactive Storytelling',
      image: require('../../assets/OnBoardingTwo.jpg'),
      subtitle:
        'Interactive stories that spark creativity and make reading fun and easy for young minds.',
    },
    {
      id: 3,
      heading: 'Personalized Learning Journey',
      image: require('../../assets/OnBoardingThree.jpg'),
      subtitle:
        'Personalized reading that boosts progress, confidence, and a love for reading.',
    },
  ];

  return (
    <CustomStatusBar statusBgColor="#FFFFFF">
      <View style={{flex: 1}}>
        <Swiper
          paginationStyle={{
            position: 'absolute',
            bottom: '15%',
          }}
          activeDotColor="#35a854"
          activeDotStyle={{width: 20, height: 8}}>
          {slides.map(slide => (
            <View key={slide.id} style={styles.container}>
              <Text style={styles.Heading}>{slide.heading}</Text>
              <Image source={slide.image} style={styles.imagecontainer} />
              <Text style={styles.subheading}>{slide.subtitle}</Text>
            </View>
          ))}
        </Swiper>

        <View
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '0%',
            right: '0%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('TabNavigator');
            }}>
            <Text style={styles.buttontext}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomStatusBar>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  Heading: {
    fontSize: 25,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 50,
    marginBottom: '0px',
  },
  imagecontainer: {
    height: '50%',
    width: '80%',
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#35a854',
    paddingHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OnBoarding;
