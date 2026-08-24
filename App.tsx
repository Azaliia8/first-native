import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { Alert, Image, Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

export default function App() {

  const [text, setText] = useState('');

  const handlePress = () => {
    Alert.alert('Entered text: ', text);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <View style={styles.box}>

          <TextInput
            style={styles.input}
            placeholder='Enter text'
            onChangeText={setText}
            value={text}
          />

          <Button
            title= "Press me"
            onPress={handlePress}
          />

          <Image
            source={require('./assets/icon.png')}
            style={styles.image}
          />

          <Pressable
            style={styles.button}
            onPress={() => Alert.alert('Button pressed')}>
            <Text style={styles.buttonText}>Press me</Text>
          </Pressable>
        </View>

        <StatusBar style='dark'/>

      </SafeAreaView>
    </SafeAreaProvider>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa7e7',
    justifyContent: 'center',
    alignItems: 'center'
  },

  box: {
    backgroundColor: 'lightblue',
    padding: 60,
    flexDirection: 'column',
    alignItems: 'center',
  },

  input: {
    backgroundColor: '#ffffff',
    width: 200,
    height: 50,
    marginBottom: 20,
  },

  image: {
    width: 100,
    height: 100,
    marginTop: 20, 
  },

  button: {
    marginTop: 20,
    backgroundColor: 'yellow',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
  },

});