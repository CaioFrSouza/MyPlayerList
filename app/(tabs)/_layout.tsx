import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, View } from 'react-native';
import {TabsIcons} from "@/components/Icons/TabsIcons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? 'light'].background;
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Tabs
        screenOptions={{
            tabBarActiveBackgroundColor: backgroundColor,
            tabBarInactiveBackgroundColor: backgroundColor,
          tabBarShowLabel: false,
            headerShown:false,

        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
              tabBarIcon: (item) => item.focused ? TabsIcons.activeHome: TabsIcons.inactiveHome
          }}
        />

          <Tabs.Screen
              name="search"
              options={{
                  title: 'teste',
                  tabBarIcon: (item) => item.focused ? TabsIcons.activePlay: TabsIcons.inactivePlay
              }}
          />

          <Tabs.Screen
              name="account"
              options={{
                  title: 'teste2',
                  tabBarIcon: (item) => item.focused ? TabsIcons.activeAccount: TabsIcons.inactiveAccount
              }}
          />
      </Tabs>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})