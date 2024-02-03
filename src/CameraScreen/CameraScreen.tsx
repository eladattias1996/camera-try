import React, {FC} from 'react';
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {DeviceNotFound} from './components/DeviceNotFound';
import {StyleSheet} from 'react-native';

export const CameraScreen: FC = () => {
  const device = useCameraDevice('front');

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
  }, []);

  if (!device) return <DeviceNotFound />;

  return (
    <Camera
      isActive
      style={styles.fullScreen}
      device={device}
      frameProcessor={frameProcessor}
    />
  );
};

export const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
