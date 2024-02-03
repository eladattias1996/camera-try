/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {CameraScreen} from './src/CameraScreen/CameraScreen';
import {WithCameraPermissions} from './src/CameraScreen/hoc/WithCameraPermissions';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <WithCameraPermissions Component={CameraScreen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});

export default App;
