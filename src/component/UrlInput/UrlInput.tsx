import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function UrlInput(props) {
  const {source, onSubmit} = props;

  const inputRef = useRef(null);
  const [value, setValue] = useState(source);
  const [isFocus, setIsFocus] = useState(false);

  const onSubmitText = value => {
    if (value !== '') {
      if (
        value.match(
          /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
        )
      ) {
        onSubmit(value);
      } else {
        onSubmit(`https://${value}`);
      }
    }
  };

  useEffect(() => {
    setValue(source);

    return () => {};
  }, [source]);

  return (
    <>
      <TextInput
        style={styles.inputContainer}
        value={value}
        onChangeText={text => setValue(text)}
        onSubmitEditing={() => onSubmitText(value)}
        autoCorrect={false}
        returnKeyType="go"
        ref={inputRef}
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          if (value === '') {
            setValue(source);
          }
          setIsFocus(false);
        }}
      />
      {isFocus && (
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setValue('')}>
          <Icon name="close-outline" size={16} color={'#ffffff'} />
        </TouchableOpacity>
      )}
    </>
  );
}
