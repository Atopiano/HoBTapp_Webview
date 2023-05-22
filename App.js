import React from 'react';
import { StyleSheet, View,Platform } from 'react-native';
import IosBrowser from './IosBrowser';
import AndBrowser from './AndBrowser';




export default class App extends React.Component {
  
  render() {
    const iOSPlatform = <IosBrowser/>;
    const androidPlatform = <AndBrowser/>;

    return (
      <View style={styles.root}>
        <View style={styles.browser}>
          {Platform.OS === 'ios'? iOSPlatform : androidPlatform}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  browser: {
    flex: 1,
    flexDirection: 'row'
  },
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
});

