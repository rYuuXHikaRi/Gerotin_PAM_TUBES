import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Preferensi from './src/screens/Preferensi';

export default function App() {
  return (
    <View style={styles.container}>
      <Preferensi/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
  },
});
