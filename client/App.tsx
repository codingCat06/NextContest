import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { MainScreen } from './src/page/MainScreen';
import { MainHeader } from './src/ui/MainHeader';

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {


  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} options={{
          header: ()=><MainHeader/>
        }} />
        {/*<Stack.Screen name="Login" component={TestScreen} />*/}
      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default App;
