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

const App = () => {
  return (
    <View style={styles.flexParent}>
      <View style={styles.view1} />
      <View style={styles.view2} />
      <View style={styles.view3} />

      {/* Size by flex */}

      {/* Try removing the `flex: 1` on the parent View.
      The parent will not have dimensions, so the children can't expand.
      What if you add `height: 300` instead of `flex: 1`? */}
      <View style={styles.flexParent}>
        <View style={styles.flexBox1} />
        <View style={styles.flexBox2} />
        <View style={styles.flexBox3} />

        {/* Similar to flex dimensions, percentage dimensions require parent with a defined size.*/}
      </View >
    </View>
  );
};

// All dimensions in React Native are unitless, and represent density-independent pixels
const styles = StyleSheet.create({
  // Size by dimensions
  view1: {
    height: 50,
    width: 50,
    backgroundColor: 'powderblue',
  },

  view2: {
    height: 100,
    width: 100,
    backgroundColor: 'skyblue',
  },

  view3: {
    height: 150,
    width: 150,
    backgroundColor: 'steelblue',
  },

  // Size by flex
  flexParent: {
    flex: 1,
  },
  flexBox1: {
    marginTop: 10,
    flex: 1,
    backgroundColor: 'powderblue',
  },
  flexBox2: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  flexBox3: {
    flex: 3,
    backgroundColor: 'steelblue',
  },
});

export default App;
