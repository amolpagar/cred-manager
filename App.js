import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TableScreen from './components/TableScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Credentials Manager" component={TableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
