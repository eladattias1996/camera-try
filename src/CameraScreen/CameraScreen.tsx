import React, {FC} from 'react';
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {DeviceNotFound} from './components/DeviceNotFound';
import {StyleSheet} from 'react-native';
import {detectFaces} from '../utils/faceDetection';
import {useAppState} from '@react-native-community/hooks';
import {FACE_DETECTION_OPTIONS} from './constants/faceDetection';

export const CameraScreen: FC = () => {
  const device = useCameraDevice('front');
  const appState = useAppState();

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';

    const result = detectFaces(frame, FACE_DETECTION_OPTIONS);

    console.log('the number of faces is', result);
  }, []);

  if (!device) return <DeviceNotFound />;

  return (
    <Camera
      isActive={appState === 'active'}
      style={styles.fullScreen}
      device={device}
      frameProcessor={frameProcessor}
      pixelFormat="yuv"
    />
  );
};

export const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
