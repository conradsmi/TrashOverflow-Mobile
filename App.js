import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    // Forward you to sign in page
    <WebView
      source={{ uri: 'https://trash-overflow-g8.herokuapp.com/signin' }}
      style={{ marginTop: '10%' }}
      sharedCookiesEnabled={true}
      thirdPartyCookiesEnabled={true}
    />
  );
}
