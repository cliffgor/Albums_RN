// Import A library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native'
import Header from './src/components/header';

//  Create a component 

const App = () => (
        <Text>Some Text</Text>
    );
// Render it to a device
AppRegistry.registerComponent('albums', ()=> App);