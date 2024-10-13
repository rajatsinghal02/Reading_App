import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';
import { Menu, Provider } from 'react-native-paper'; 

const poems = {
  "Twinkle Twinkle Little Star": 
  `Twinkle, twinkle, little star, How I wonder what you are! Up above the world so high, Like a diamond in the sky. Twinkle, twinkle, little star, How I wonder what you are!`,
  
  "Hickory Dickory Dock": 
  `Hickory dickory dock, The mouse ran up the clock. The clock struck one, The mouse ran down. Hickory dickory dock.`,

  "Baa Baa Black Sheep": 
  `Baa, baa, black sheep, Have you any wool? Yes sir, yes sir, Three bags full. One for the master, One for the dame, And one for the little boy Who lives down the lane.`
};

const App = () => {
  const [selectedPoem, setSelectedPoem] = useState("Twinkle Twinkle Little Star"); 
  const [words, setWords] = useState(poems["Twinkle Twinkle Little Star"].split(' ')); 
  const [currentIndex, setCurrentIndex] = useState(-1); 
  const [isReading, setIsReading] = useState(false);    
  const [intervalId, setIntervalId] = useState(null);   
  const [menuVisible, setMenuVisible] = useState(false); 

  useEffect(() => {

    Tts.setDefaultRate(0.5);
    Tts.setDefaultLanguage('en-US');
    Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
   
    return () => {
      Tts.stop();
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

 
  const speakWord = (index) => {
    if (index >= 0 && index < words.length) {
      Tts.stop();
      Tts.speak(words[index]);
    }
  };


  const handleStop = () => {
    setIsReading(false);
    Tts.stop();
    if (intervalId) {
      clearInterval(intervalId);  
      setIntervalId(null);
    }
  };


  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      speakWord(newIndex);
    }
  };


  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      speakWord(newIndex);
    }
  };


  const handleReadOnce = () => {
    if (!isReading) {
      setIsReading(true);
      let index = currentIndex === -1 ? 0 : currentIndex; 
      setCurrentIndex(index);
      
      
      setTimeout(() => speakWord(index), 0); 
  
      const id = setInterval(() => {
        if (index < words.length - 1) {
          index += 1;
          setCurrentIndex(index);
          speakWord(index);
        } else {
          handleStop(); 
        }
      }, 1000); 
  
      setIntervalId(id); 
    }
  };

  
  const handleReset = () => {
    setCurrentIndex(-1); 
    setWords(poems[selectedPoem].split(' ')); 
    Tts.stop(); 
  };

  
  const handleSelectPoem = (poemTitle) => {
    setSelectedPoem(poemTitle); 
    setWords(poems[poemTitle].split(' '));
    setCurrentIndex(-1); 
    Tts.stop(); 
    setMenuVisible(false); 
  };

  return (
    <Provider>
      <View style={styles.container}>
        {/* Dropdown for selecting poems */}
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.dropdownButton}>
              <Text style={styles.dropdownText}>Select Poem: {selectedPoem}</Text>
            </TouchableOpacity>
          }
        >
          {Object.keys(poems).map((poemTitle, index) => (
            <Menu.Item
              key={index}
              onPress={() => handleSelectPoem(poemTitle)}
              title={poemTitle}
            />
          ))}
        </Menu>

        {/* Display the poem */}
        <Text style={styles.poem}>
          {words.map((word, index) => (
            <Text
              key={index}
              style={[
                styles.word,
                index === currentIndex ? styles.highlightedWord : null,  // Highlight only when index matches currentIndex
              ]}
            >
              {word + ' '}
            </Text>
          ))}
        </Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <View style={styles.buttonWrapper}>
              <Button color="#3498db" title="Previous" onPress={handlePrevious} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button color="#2ecc71" title="Next" onPress={handleNext} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.buttonWrapper}>
              <Button color="#f39c12" title="Read Once" onPress={handleReadOnce} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button color="#e74c3c" title="Stop" onPress={handleStop} />
            </View>
          </View>
          <View style={styles.singleButton}>
            <Button color="#8e44ad" title="Reset" onPress={handleReset} />
          </View>
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  poem: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 40,
    color: '#2c3e50',
    fontWeight: '600',
  },
  word: {
    fontSize: 22,
  },
  highlightedWord: {
    backgroundColor: '#f1c40f',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  singleButton: {
    width: '50%',
    marginTop: 20,
  },
  dropdownButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  dropdownText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
