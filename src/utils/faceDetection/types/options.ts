export enum LandmarkMode {
  NONE = 1,
  ALL = 2,
}

export enum ContourMode {
  NONE = 1,
  ALL = 2,
}

export enum ClassificationMode {
  NONE = 1,
  ALL = 2,
}

export enum PerformanceMode {
  FAST = 1,
  ACCURATE = 2,
}

export type FaceDetectionOptions = {
  landmarkMode?: LandmarkMode;
  contourMode?: ContourMode;
  classificationMode?: ClassificationMode;
  performanceMode?: PerformanceMode;
  trackingEnabled?: boolean;
  minFaceSize?: number;
};