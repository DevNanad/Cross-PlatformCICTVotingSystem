import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

type CustomAlertProps = {
    visible: boolean;
    onClose: () => void;
    message: string;
  };

const CustomAlert = ({ visible, onClose, message }: CustomAlertProps) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <TouchableOpacity
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View style={{ backgroundColor: '#fff', padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Alert</Text>
          <Text style={{ fontSize: 16, lineHeight: 20 }}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={{ alignSelf: 'flex-end', marginTop: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'blue' }}>OK</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomAlert

