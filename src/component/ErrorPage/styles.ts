import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  errorContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 24,
  },
  errorHeader: {
    color: '#808589',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 72,
    marginBottom: 16,
  },
  errorSubHeader: {
    color: '#808589',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 16,
  },
  errorDescription: {
    color: '#808589',
    textAlign: 'center',
    fontSize: 14,
  },
});
