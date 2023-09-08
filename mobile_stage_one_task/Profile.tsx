import React from 'react';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Profile({goToGithub}: {goToGithub: () => void}): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('./assets/profilePic.jpg')}
          style={styles.image}
        />

        <Text style={styles.name}>Ibrahim Taofeek</Text>

        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => goToGithub()}>
          <Text style={styles.buttonText}>Open Github</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 180,
    borderRadius: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  buttonWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  buttonText: {color: 'white', fontSize: 18},
});
