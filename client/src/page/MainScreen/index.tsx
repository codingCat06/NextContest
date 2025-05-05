


import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Button, Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { HomeScreen } from '../HomeScreen';
import { Icon } from '../../ui/Icon';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="home" color={color} size={size} />
          ),
          headerShown: false
        }}
      />

      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          title: '스케쥴',
          tabBarIcon: ({color, size}) => (
              <Icon name="calendar-month" color={color} size={size}/>
          ),
          headerShown: false

        }}
      />

      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: '메시지',
          tabBarIcon: ({color, size}) => (
            <Icon name="edit-calendar" color={color} size={size}/>
            ),
          headerShown: false

        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="notifications" color={color} size={size} />
          ),
          headerShown: false

        }}
      />


    </Tab.Navigator>
  );
}


function ScheduleScreen() {
  return <Text >ScheduleScreen</Text>;
}

function NotificationScreen() {
  return <Text>Notification</Text>;
}

function MessageScreen() {
  return <Text>Message</Text>;
}

export {MainScreen}