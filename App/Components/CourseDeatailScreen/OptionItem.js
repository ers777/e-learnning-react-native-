import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Используйте Ionicons, а не ionicons
// значение иконок и их текста
export default function OptionItem({ icon, value }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginTop: 5,
      }}
    >
      <Ionicons name={icon} size={24} color="black" />
      <Text>{value} </Text>
    </View>
  );
}
