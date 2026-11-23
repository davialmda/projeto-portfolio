import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { ComponentProps } from 'react';
import { colors } from '../../theme';

type IconName = ComponentProps<typeof Ionicons>['name'];

const tabIcon =
  (name: IconName) =>
  ({ color, size }: { color: unknown; size: number }) => (
    <Ionicons name={name} size={size} color={color as string} />
  );

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
        tabBarLabelStyle: { fontSize: 10 },
      }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: tabIcon('home') }} />
      <Tabs.Screen name="sobre" options={{ title: 'Sobre', tabBarIcon: tabIcon('person') }} />
      <Tabs.Screen name="academica" options={{ title: 'Acadêmica', tabBarIcon: tabIcon('school') }} />
      <Tabs.Screen name="profissional" options={{ title: 'Profissional', tabBarIcon: tabIcon('briefcase') }} />
      <Tabs.Screen name="projetos" options={{ title: 'Projetos', tabBarIcon: tabIcon('rocket') }} />
      <Tabs.Screen name="jogo" options={{ title: 'Jogo', tabBarIcon: tabIcon('game-controller') }} />
    </Tabs>
  );
}