import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import UrlInput from '../UrlInput/UrlInput';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomBar = React.forwardRef((props: any, ref) => {
  const insets = useSafeAreaInsets();
  const {canGoBack, canGoForward, onSubmit, source} = props;

  const onBack = () => {
    ref.current.goBack();
  };

  const onForward = () => {
    ref.current.goForward();
  };

  const onRefresh = () => {
    ref.current.reload();
  };

  return (
    <View
      style={[
        styles.toolbarContainer,
        {
          paddingBottom: insets.bottom + 12,
        },
      ]}>
      <TouchableOpacity
        style={styles.navigationButton}
        disabled={!canGoBack}
        onPress={onBack}>
        <Icon
          name="arrow-back-outline"
          size={24}
          color={canGoBack ? '#1A99F4' : '#888888'}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigationButton} onPress={onRefresh}>
        <Icon name="refresh-outline" size={24} color={'#888888'} />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!canGoForward}
        style={styles.navigationButton}
        onPress={onForward}>
        <Icon
          name="arrow-forward-outline"
          size={24}
          color={canGoForward ? '#1A99F4' : '#888888'}
        />
      </TouchableOpacity>
    </View>
  );
});

export default BottomBar;
