import React, {useState, memo} from 'react';
import WebView from 'react-native-webview';
import {
  RefreshControl,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ErrorPage from '../ErrorPage/ErrorPage';
import * as Progress from 'react-native-progress';
import {styles} from './styles';

const RefreshWebView = React.forwardRef((props: any, ref: any) => {
  const {source, setCanGoForward, setCanGoBack, setProgress} = props;

  const [height, setHeight] = useState(Dimensions.get('screen').height);
  const [isEnabled, setEnabled] = useState(true);
  const [isRefresh, setIsRefresh] = useState(false);

  const onRefresh = () => {
    ref.current.reload();
  };

  return (
    <View style={styles.webviewContainer}>
      <ScrollView
        onLayout={e => setHeight(e.nativeEvent.layout.height)}
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={isRefresh}
            enabled={isEnabled}
          />
        }
        style={styles.view}>
        <WebView
          ref={ref}
          onScroll={e => setEnabled(e.nativeEvent.contentOffset.y === 0)}
          style={[styles.view, {height}]}
          source={{uri: source}}
          allowsBackForwardNavigationGestures={true}
          onLoadEnd={syntheticEvent => {
            const {nativeEvent} = syntheticEvent;
            if (nativeEvent.url !== source) {
              props.setSource(nativeEvent.url);
            }
            setCanGoBack(nativeEvent.canGoBack);
            setCanGoForward(nativeEvent.canGoForward);
          }}
          onLoadProgress={({nativeEvent}) => {
            setProgress(nativeEvent.progress);
          }}
          renderError={(errorName, errorCode, errorDescription) => {
            return (
              <ErrorPage
                errorName={errorName}
                errorCode={errorCode}
                errorDescription={errorDescription}
              />
            );
          }}
        />
      </ScrollView>
    </View>
  );
});

export default memo(RefreshWebView);
