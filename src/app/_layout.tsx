import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { makeInitialDb } from '../../App';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="semflow.db" onInit={makeInitialDb}>
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#FBFAF7' } }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SQLiteProvider>
  );
}
