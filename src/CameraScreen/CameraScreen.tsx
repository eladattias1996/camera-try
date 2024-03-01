import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import FaceDetectionCamera from './containers/FaceDetectionCamera';
import FaceDetectorFallback from './components/FaceDetectorFallback';

export const CameraScreen: FC = () => {
  return (
    <View style={styles.screen}>
      <ErrorBoundary FallbackComponent={FaceDetectorFallback}>
        <FaceDetectionCamera />
      </ErrorBoundary>
    </View>
  );
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
