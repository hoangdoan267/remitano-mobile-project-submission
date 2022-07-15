import {View, Text, Image} from 'react-native';
import React from 'react';
import UrlInput from '../UrlInput/UrlInput';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BrowserToolbar = React.forwardRef((props: any, ref) => {
  const insets = useSafeAreaInsets();
  const {onSubmit, source} = props;

  return (
    <View
      style={[
        styles.toolbarContainer,
        {
          paddingTop: insets.top + 8,
        },
      ]}>
      <UrlInput onSubmit={onSubmit} source={source} />
    </View>
  );
});

export default BrowserToolbar;
