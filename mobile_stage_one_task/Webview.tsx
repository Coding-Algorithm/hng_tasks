import React, {Component, PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

class MyGithubProfile extends Component<any & {url: string}> {
  constructor(props: {props: PropsWithChildren; url: string}) {
    super(props);
    console.log('getting here', props.url);
  }

  render() {
    return <WebView style={styles.container} source={{uri: this.props.url}} />;
  }
}
export default MyGithubProfile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
