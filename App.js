import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import LoginSreen from './App/Screen/LoginSreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });
  return (
    <ClerkProvider publishableKey={"pk_test_c3dlZXBpbmctbWVlcmthdC02LmNsZXJrLmFjY291bnRzLmRldiQ"}> 
    <View style={styles.container}>
      <SignedIn>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>

        </SignedIn>
        <SignedOut>
        <LoginSreen/>
        </SignedOut>
    </View></ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20
    
  },
});
