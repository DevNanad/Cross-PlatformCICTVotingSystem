import { TextInputProps, StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native';
import React from 'react';

const CustomInput = ({
  placeholder,
  value,
  setValue,
  secureTextEntry,
  keyType,
  maxLength,
}: TextInputProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        keyboardType={keyType}
        style={[styles.input, isDarkMode ? styles.inputDark : styles.inputLight]}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    borderRadius: 8,

    paddingHorizontal: 10,
    marginVertical: 8,
  },
  containerDark: {
    backgroundColor: '#31323C',
  },
  containerLight: {
    backgroundColor: '#e8e8e8',
  },
  input: {
    color: '#1b1c27',
    fontSize: 17,
  },
  inputDark: {
    color: 'white',
  },
  inputLight: {
    color: '#1b1c27',
  },
});