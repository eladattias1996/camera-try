import {
  ClassificationMode,
  FaceDetectionOptions,
  LandmarkMode,
  PerformanceMode,
} from '../../utils/faceDetection';

export const FACE_DETECTION_OPTIONS: FaceDetectionOptions = {
  landmarkMode: LandmarkMode.ALL,
  classificationMode: ClassificationMode.ALL,
  performanceMode: PerformanceMode.ACCURATE,
};
