import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Task } from './Screens/ListaTarefa';

import Details from './Screens/Details';
import ListaTarefa from "./Screens/ListaTarefa";


export type RootStackParamList = {
ListaTarefa: undefined;
Details: { task: Task };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="ListaTarefa" component={ListaTarefa}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default App; 