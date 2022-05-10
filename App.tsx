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
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
      <Text style={styles.title}>
        Hello there!
      </Text>
      <Text style={styles.text}>
        My name is {name}
      </Text>
      <Text style={styles.text}>
        and my current enthusiasm level is:
      </Text>
      <Text style={styles.text}>
        {enthusiasmLevel}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity 
          accessibilityLabel='increment'
          onPress={onIncrement}
          >
          <View style={styles.incrementButton}>
            <Text style={styles.buttonText}>
              {'Decrement \nenthusiams'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          accessibilityLabel='decrement'
          onPress={onDecrement}
          >
          <View style={styles.decrementButton}>
            <Text style={styles.buttonText}>
              {'Decrement \nenthusiams'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const App = () => {
  return (
    <SafeAreaView>
      <Hello name={"Andres Arana"}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Helvetica",
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
    marginBottom: 80,
  },
  text: {
    fontFamily: "Helvetica",
    fontSize: 20,
    marginVertical: 10,
  },
  buttons: {
    alignSelf: "stretch",
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    padding: 10,
    marginTop: 20,
  },
  decrementButton: {
    backgroundColor: "red",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  incrementButton: {
    backgroundColor: "blue",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "Helvetica",
    fontSize: 16,
    color: "white",
  }
});

export default App;
