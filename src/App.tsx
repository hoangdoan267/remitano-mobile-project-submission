import {View, Text} from 'react-native';
import React from 'react';
import BrowserScreen from './screen/BrowserScreen/BrowserScreen';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <BrowserScreen />
    </SafeAreaProvider>
  );
}
