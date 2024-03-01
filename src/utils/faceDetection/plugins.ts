import {VisionCameraProxy, Frame} from 'react-native-vision-camera';
import {FaceDetectionOptions} from './types';

const plugin = VisionCameraProxy.initFrameProcessorPlugin('detectFaces');

// TODO: put type here!!!
export function detectFaces(frame: Frame, options?: FaceDetectionOptions) {
  'worklet';
  if (plugin == null) {
    throw new Error('Failed to load Frame Processor Plugin!');
  }
  return plugin.call(frame, options);
}
