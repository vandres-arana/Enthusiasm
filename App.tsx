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
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export type Props = {
  name: String;
  baseEnthusiasmLevel?: number;
}

const Hello: React.FC<Props> = ({
  name,
  baseEnthusiasmLevel = 0
}) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
    baseEnthusiasmLevel
  );

  const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () => setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0);

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.greeting}>
        Hello my dear {name}
        {getExclamationMarks(enthusiasmLevel)}
      </Text>
      <View>
        <Button
          title='Increase enthusiasm'
          accessibilityLabel='increment'
          onPress={onIncrement}
          color="blue"
          />
        <Button
          title='Decrease enthusiasm'
          accessibilityLabel='decrement'
          onPress={onDecrement}
          color="red"
        />
      </View>
    </View>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Hello name={"Andres Arana"}/>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  }
});

export default App;
