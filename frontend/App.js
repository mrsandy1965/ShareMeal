import React from 'react';
import { Provider as PaperProvider, DefaultTheme, configureFonts } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import VolunteerDashboard from './src/Volunteer/components/VolunteerDashboard';

// Configure the theme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1ABC9C', // Teal
    accent: '#16A085', // Green-Blue
    background: '#FFFFFF', // White
    surface: '#FFFFFF', // White
    text: '#0E0E0E', // Rich Black
    error: '#f44336',
    disabled: '#CCCCCC', // Gray
    placeholder: '#CCCCCC', // Gray
    // Custom colors
    secondary: '#2980B9', // Royal Blue
    softBlue: '#AEDFF7',
    richBlack: '#0E0E0E',
    gray: '#CCCCCC',
  },
  roundness: 8,
};

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
        <VolunteerDashboard />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
