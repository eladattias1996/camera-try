import React, {FC, useCallback, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {StyleSheet, View} from 'react-native';
import {detectFaces} from '../utils/faceDetection';
import {useAppState} from '@react-native-community/hooks';
import {FACE_DETECTION_OPTIONS} from './constants/faceDetection';
import {Worklets} from 'react-native-worklets-core';
import {getHintMessage} from './utils/utils';
import {Controls, DeviceNotFound, Hint} from './components';

export const CameraScreen: FC = () => {
  const device = useCameraDevice('front');
  const appState = useAppState();
  const [numberOfFaces, setNumberOfFaces] = useState(0);
  const captureDisabled = numberOfFaces !== 1;
  const hintMessage = getHintMessage({numberOfFaces});

  const updateNumberOfFaces = useCallback(
    Worklets.createRunInJsFn((num: number) => setNumberOfFaces(num)),
    [setNumberOfFaces],
  );

  const frameProcessor = useFrameProcessor(
    frame => {
      'worklet';

      const faces = detectFaces(frame, FACE_DETECTION_OPTIONS);

      updateNumberOfFaces(faces.length);
    },
    [updateNumberOfFaces],
  );

  if (!device) return <DeviceNotFound />;

  return (
    <View style={styles.screen}>
      <Camera
        isActive={appState === 'active'}
        style={StyleSheet.absoluteFill}
        device={device}
        frameProcessor={frameProcessor}
        pixelFormat="yuv"
      />
      {hintMessage && <Hint message={hintMessage} style={styles.header} />}
      <Controls
        style={styles.footer}
        captureDisabled={captureDisabled}
        onCapturePress={() => console.log('capture pressed')}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  camera: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
});
