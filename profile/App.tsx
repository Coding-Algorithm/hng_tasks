import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import Profile from './Profile';
import MyGithubProfile from './Webview';

function App(): JSX.Element {
  const [showProfile, setShowProfile] = useState(true);

  const backArrow = '<<';
  const profileLink = 'https://github.com/Coding-Algorithm';

  BackHandler.addEventListener('hardwareBackPress', function () {
    if (showProfile === false) {
      console.log('go in back on false', showProfile);
      setShowProfile(true);
      return true;
    }

    return false;
  });

  return (
    <View style={styles.container}>
      {showProfile ? (
        <Profile goToGithub={() => setShowProfile(false)} />
      ) : null}

      {!showProfile ? (
        <>
          <View style={styles.headerWrapper}>
            <TouchableOpacity
              onPress={() => setShowProfile(true)}
              style={styles.backButtonWrapper}>
              <Text style={styles.backButtonIcon}>{backArrow}</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>{profileLink}</Text>
          </View>
          <MyGithubProfile url={profileLink} />
        </>
      ) : null}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
  headerWrapper: {
    width: '100%',
    height: 50,
    backgroundColor: '#D3D3D3',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backButtonWrapper: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  backButtonIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 15,
    color: 'black',
  },
  headerText: {fontSize: 14, color: 'black'},
});
