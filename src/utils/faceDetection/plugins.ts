import {VisionCameraProxy, Frame} from 'react-native-vision-camera';
import {Face, FaceDetectionOptions} from './types';

const plugin = VisionCameraProxy.initFrameProcessorPlugin('detectFaces');

export function detectFaces(
  frame: Frame,
  options?: FaceDetectionOptions,
): Face[] {
  'worklet';
  if (plugin == null) {
    throw new Error('Failed to load Frame Processor Plugin!');
  }

  // @ts-expect-error
  return plugin.call(frame, options);
}
