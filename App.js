import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// test
export default function App() {
  return (
    <WebView
      source={{ uri: 'https://trash-overflow-g8.herokuapp.com' }}
      style={{ marginTop: '10%' }}
      sharedCookiesEnabled={true}
      thirdPartyCookiesEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
