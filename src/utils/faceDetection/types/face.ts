export interface Face {
  boundingBox: BoundingBox;
  rightEyeOpenProbability?: number;
  leftEyeOpenProbability?: number;
  smilingProbability?: number;
  trackingId?: number;
  headEulerAngleX: number;
  headEulerAngleY: number;
  headEulerAngleZ: number;
  allLandmarks: Landmark[];
  allContours: Contour[];
}

export interface BoundingBox {
  top: number;
  bottom: number;
  right: number;
  left: number;
}

export interface Point {
  x: number;
  y: number;
}

export enum LandmarkType {
  LEFT_CHEEK = 1,
  LEFT_EAR = 3,
  LEFT_EYE = 4,
  MOUTH_BOTTOM = 0,
  MOUTH_LEFT = 5,
  MOUTH_RIGHT = 11,
  NOSE_BASE = 6,
  RIGHT_CHEEK = 7,
  RIGHT_EAR = 9,
  RIGHT_EYE = 10,
}

export interface Landmark {
  landmarkType: LandmarkType;
  position: Point;
}

export enum ContourType {
  FACE = 1,
  LEFT_CHEEK = 14,
  LEFT_EYE = 6,
  LEFT_EYEBROW_BOTTOM = 3,
  LEFT_EYEBROW_TOP = 2,
  LOWER_LIP_BOTTOM = 11,
  LOWER_LIP_TOP = 10,
  NOSE_BOTTOM = 13,
  NOSE_BRIDGE = 12,
  RIGHT_CHEEK = 15,
  RIGHT_EYE = 5,
  RIGHT_EYEBROW_TOP = 4,
  UPPER_LIP_BOTTOM = 9,
  UPPER_LIP_TOP = 8,
}

export interface Contour {
  faceContourType: ContourType;
  points: Point[];
}
