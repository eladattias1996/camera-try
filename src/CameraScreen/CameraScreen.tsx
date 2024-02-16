import React, {FC} from 'react';
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {DeviceNotFound} from './components/DeviceNotFound';
import {StyleSheet} from 'react-native';
import {detectFaces} from './plugins/plugins';
import {useAppState} from '@react-native-community/hooks';

export const CameraScreen: FC = () => {
  const device = useCameraDevice('front');
  const appState = useAppState();

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';

    const result = detectFaces(frame);

    console.log('the number of faces is', result);
  }, []);

  if (!device) return <DeviceNotFound />;

  return (
    <Camera
      isActive={appState === 'active'}
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
