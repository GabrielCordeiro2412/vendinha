import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRoutes from './src/routes/routes';
import HomeIcon from './assets/HomeIcon.svg'

export default function App() {
  return (
    <>
      <AppRoutes/>
    </>
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
