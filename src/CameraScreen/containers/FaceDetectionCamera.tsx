import {useAppState} from '@react-native-community/hooks';
import {FC, useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {getHintMessage} from '../utils/utils';
import {NoCameraDeviceFound} from '../errors/errors';
import {detectFaces} from '../../utils/faceDetection';
import {FACE_DETECTION_OPTIONS} from '../constants/faceDetection';
import {Controls, Hint} from '../components';
import {Worklets} from 'react-native-worklets-core';

const FaceDetectionCamera: FC = () => {
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

      try {
        const faces = detectFaces(frame, FACE_DETECTION_OPTIONS);

        console.log('here with faces', JSON.stringify(faces, null, 2));

        updateNumberOfFaces(faces.length);
      } catch (e: unknown) {
        console.log('there is an eror', e);
        // TODO: raise the error above
        // throw new FaceDetectionError(
        //   e instanceof Error ? e.message : 'unknown error',
        // );
      }
    },
    [updateNumberOfFaces],
  );

  if (!device) throw new NoCameraDeviceFound();

  return (
    <>
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
    </>
  );
};

export const styles = StyleSheet.create({
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

export default FaceDetectionCamera;
