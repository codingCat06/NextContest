import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { MainScreen } from './src/page/HomeScreen';
import { MainHeader } from './src/ui/MainHeader';

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {


  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{
          header: ()=><MainHeader/>
        }} />
        {/*<Stack.Screen name="Login" component={TestScreen} />*/}
      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default App;
