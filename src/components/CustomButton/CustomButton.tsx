import { Text, StyleSheet, Pressable, GestureResponderEvent, ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAuthStore } from '../../store/AuthStore';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  type: string;
  disabled?: boolean;
};

const CustomButton = ({ onPress, disabled, title, type = 'PRIMARY' }: Props) => {
    const btnStyle = type === "PRIMARY" ? "bg_PRIMARY" : "bg_SECONDARY";
    const titleStyle = type === "PRIMARY" ? "text_PRIMARY" : "text_SECONDARY";
    const loading = useAuthStore((state) => state.loading)
    
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.container, styles[`${btnStyle}`]]}>
      <Text style={styles[`${titleStyle}`]}>{loading ? (<ActivityIndicator size={23} color="#ffffff" />) : title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 7,
    alignItems: 'center',
    borderRadius: 8,
  },
  bg_PRIMARY: {
    backgroundColor: '#4C7CE5',
  },
  bg_SECONDARY: {
    backgroundColor: '#BDCDD6',
  },
  text_PRIMARY: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
  },
  text_SECONDARY: {
    color: '#3F3D56',
    fontSize: 16,
    fontWeight: '700',
  },
});
export default CustomButton;