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
import MyKeyboardAvoidingView from './views/MyKeyboardAvoidingView';
import MyModal from './views/MyModal';
import MyPressable from './views/MyPressable';
import MyRefreshControl from './views/MyRefreshControl';
import MyScrollView from './views/MyScrollView';
import SwitchComponente from './views/SwitchComponente';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Hello name={"Andres Arana"}/> */}
      {/* <SwitchComponente /> */}
      {/* <MyActivityIndicator/> */}
      {/* <MyFlatList /> */}
      {/* <MyImage /> */}
      {/* <MyImageBackground /> */}
      {/* <MyKeyboardAvoidingView /> */}
      {/* <MyModal /> */}
      {/* <MyPressable /> */}
      {/* <MyRefreshControl /> */}
      <MyScrollView />
    </SafeAreaView>
  );
};

export default App;
