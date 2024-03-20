import React from 'react';
import { StyleSheet, View } from 'react-native';
import Register from './src/components/registers';

export default function App() {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    marginTop: 30
  },
});
