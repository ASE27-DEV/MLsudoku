import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useLocalSearchParams } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const params = useLocalSearchParams();
  const [currentParams, setCurrentParams] = useState(params);

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ 
            headerShown: false,
            headerTitle: "Home Page"
          }} 
        />
        <Stack.Screen 
          name="difficultySelectionScreen/[id]" 
          options={{ 
            headerShown: false,
            headerTitle: `Choisi ta difficulté`,
          }}
        />
        <Stack.Screen 
          name="sudokuGridScreen/[difficulty]"
          options={{ 
            headerShown: false,
            headerTitle: "Grille sudoku",
          }} 
        />
      </Stack>
    </ThemeProvider>
  );
}