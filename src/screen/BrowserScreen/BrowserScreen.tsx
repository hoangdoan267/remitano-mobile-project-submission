import {View, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import RefreshWebView from '../../component/RefreshWebview/RefreshWebview';
import BrowserToolbar from '../../component/BrowserToolbar/BrowserToolbar';
import ProgressBar from 'react-native-progress/Bar';
import BottomBar from '../../component/BottomBar/BottomBar';

export default function BrowserScreen() {
  const webRef = useRef(null);

  const [source, setsource] = useState('https://vietcetera.com/');
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [progress, setProgress] = useState(0);

  const onBack = () => {
    webRef.current.goBack();
  };

  const onForward = () => {
    webRef.current.goForward();
  };

  useEffect(() => {
    if (progress === 1) {
      setProgress(0);
    }
    return () => {};
  }, [progress]);

  const onSubmit = (url: string) => {
    setsource(url);
  };

  return (
    <View style={{flex: 1}}>
      <BrowserToolbar
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        ref={webRef}
        source={source}
        onSubmit={onSubmit}
      />
      {progress > 0 && (
        <ProgressBar
          progress={progress}
          width={Dimensions.get('window').width}
          height={2}
          color={'#1A99F4'}
          borderRadius={0}
          borderColor={'transparent'}
          borderWidth={0}
        />
      )}

      <RefreshWebView
        ref={webRef}
        source={source}
        setSource={setsource}
        setCanGoBack={setCanGoBack}
        setCanGoForward={setCanGoForward}
        setProgress={setProgress}
      />
      <BottomBar
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        ref={webRef}
      />
    </View>
  );
}
