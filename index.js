// Import A library to help create a component
import React from 'react';
import ReactNative from 'react-native';
//  Create a component 

const App = () => {
    return (
        <Text>Some Text</Text>
    );
}

// Render it to a device
ReactNative.AppRegistry.registerComponent('albums', ()=> App);