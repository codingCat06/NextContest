


import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Button, Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

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
        name="Search"
        component={SearchScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="notifications" color={color} size={size} />
          ),
          headerShown: false

        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: '검색',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="search" color={color} size={size} />
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
            <MaterialIcon name="message" color={color} size={size} />
          ),
          headerShown: false

        }}
      />
    </Tab.Navigator>
  );
}
function HomeScreen() {
    const navigation = useNavigation<any>()
    return (
        <View>
        <Text>Home</Text>
        <Button
            title="상세보기"
            onPress={() => navigation.navigate('Detail', {id: 1})}
        />
        </View>
    );
}

function SearchScreen() {
  return <Text >Search</Text>;
}

function NotificationScreen() {
  return <Text>Notification</Text>;
}

function MessageScreen() {
  return <Text>Message</Text>;
}

export {MainScreen}