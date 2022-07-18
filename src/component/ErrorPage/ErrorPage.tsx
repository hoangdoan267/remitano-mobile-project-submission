import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

export default function ErrorPage({errorDescription, errorName, errorCode}) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorHeader}>Oops!</Text>
      <Text style={styles.errorSubHeader}>404 - PAGE NOT FOUND</Text>
      <Text style={styles.errorDescription}>{errorDescription}</Text>
    </View>
  );
}
