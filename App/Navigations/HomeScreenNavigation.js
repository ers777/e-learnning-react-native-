import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screen/HomeScreen';
import CourseDetailScreen from '../Screen/CourseDetailScreen';
import ChapterCoontentScreen from '../Screen/ChapterCoontentScreen';

const Stack = createStackNavigator();

export default function HomeScreenNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={HomeScreen}/>

      
      <Stack.Screen name='course-detail' component={CourseDetailScreen}/>
      <Stack.Screen name='chapter-content' component={ChapterCoontentScreen}/>

    </Stack.Navigator>
  );
}
