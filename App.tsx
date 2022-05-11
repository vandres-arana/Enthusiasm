/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Hello from './views/Hello';
import MyActivityIndicator from './views/MyActivityIndicator';
import MyFlatList from './views/MyFlatList';
import MyImage from './views/MyImage';
import MyImageBackground from './views/MyImageBackground';
import SwitchComponente from './views/SwitchComponente';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Hello name={"Andres Arana"}/> */}
      {/* <SwitchComponente /> */}
      {/* <MyActivityIndicator/> */}
      {/* <MyFlatList /> */}
      {/* <MyImage /> */}
      <MyImageBackground />
    </SafeAreaView>
  );
};

export default App;
