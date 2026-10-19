import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

const icons: Record<string, string> = { index: '✦', attendance: '◉', schedule: '▦', practice: '⌘', homework: '✎', gpa: '↗' };

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#697AF2',
        tabBarInactiveTintColor: '#8E98A9',
        tabBarStyle: { backgroundColor: '#FFFFFF', borderTopColor: '#EBEAE5', height: 68, paddingTop: 6, paddingBottom: 7 },
        tabBarLabelStyle: { fontSize: 8, fontWeight: '700', marginTop: 1 },
        tabBarIcon: ({ color, focused }) => (
          <View style={{ width: 34, height: 26, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: focused ? '#EEF0FF' : 'transparent' }}>
            <Text style={{ color, fontSize: 15, fontWeight: '700' }}>{icons[route.name]}</Text>
          </View>
        ),
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Today' }} />
      <Tabs.Screen name="attendance" options={{ title: 'Attendance' }} />
      <Tabs.Screen name="schedule" options={{ title: 'Schedule' }} />
      <Tabs.Screen name="practice" options={{ title: 'Practice' }} />
      <Tabs.Screen name="homework" options={{ title: 'Diary' }} />
      <Tabs.Screen name="gpa" options={{ title: 'GPA' }} />
    </Tabs>
  );
}
