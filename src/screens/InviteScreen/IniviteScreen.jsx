import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar';

const InviteShareScreen = ({navigation}) => {
  return (
    <CustomStatusBar statusBgColor="#FFFFFF">
      <View style={styles.container}>
        
        {/* Header */}
        <Text style={styles.title}>Invite a Friend</Text>
        <Text style={styles.subtitle}>Share the Joy of Reading</Text>
        
        {/* Illustration */}
        <Image 
          source={require('../../assets/Invite.jpg')} 
          style={styles.image} 
        />
        
        {/* Invite Button */}
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.buttonText}>Invite Friends</Text>
        </TouchableOpacity>

        {/* Share App Button */}
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.buttonText}>Share the App</Text>
        </TouchableOpacity>
        
        {/* Footer Text */}
        <Text style={styles.footerText}>Sharing stories brings us closer together!</Text>
      </View>
    </CustomStatusBar>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#35a854',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  image: {
    width: '90%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  inviteButton: {
    backgroundColor: '#35a854',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  shareButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 40,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default InviteShareScreen;
