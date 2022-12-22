/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    // we can use the style prop to use css properties
    //style prop take an object as a value
    <View style={styles.container}>
      {/* We can define objects for large application and use it in style prop */}
      <Text style={styles.red}>Just Red</Text>
      <Text style={styles.bigBlue}>Just Big Blue</Text>
      {/* We can pass the array of an objects to style prop */}
      <Text style={[styles.bigBlue, styles.red]}>Big Blue then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>Red then Big Blue</Text>
    </View>
  );
};

// We can define objects for large application and use it in style prop
const styles = StyleSheet.create({
  container: {
    margin: 100,
  },

  red: {
    color: 'red',
    fontSize: 20,
  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default App;
