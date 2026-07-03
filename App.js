import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RingkasanScreen from './screens/RingkasanScreen';
import PertemuanScreen from './screens/PertemuanScreen';
import JadwalScreen from './screens/JadwalScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#4F46E5',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Ringkasan') iconName = 'book-outline';
            else if (route.name === 'Pertemuan') iconName = 'list-outline';
            else if (route.name === 'Jadwal') iconName = 'calendar-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Ringkasan" component={RingkasanScreen} />
        <Tab.Screen name="Pertemuan" component={PertemuanScreen} />
        <Tab.Screen name="Jadwal" component={JadwalScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
