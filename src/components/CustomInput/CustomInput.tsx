import { TextInputProps, StyleSheet, Text, TextInput, View, useColorScheme, KeyboardTypeOptions } from 'react-native';
import { Dispatch, SetStateAction } from 'react'

interface MyTextInputProps extends TextInputProps {
  setValue: Dispatch<SetStateAction<string>>;
  keyType?:KeyboardTypeOptions;
}

const CustomInput = ({
  placeholder,
  value,
  setValue,
  secureTextEntry,
  keyType,
  maxLength,
}: MyTextInputProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.container]}>
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
    width: '100%',

    marginVertical: 8,
  },
  input: {
    color: '#1b1c27',
    fontSize: 17,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,

  },
  inputDark: {
    color: 'white',
    borderColor: "gray"
  },
  inputLight: {
    color: '#1b1c27',
    borderRadius: 10,
  },
});