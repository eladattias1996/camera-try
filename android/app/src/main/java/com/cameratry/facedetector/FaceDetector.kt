package com.cameratry.facedetector

import com.google.android.gms.tasks.Task
import com.google.android.gms.tasks.TaskCompletionSource
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.face.Face
import com.google.mlkit.vision.face.FaceDetection
import com.google.mlkit.vision.face.FaceDetectorOptions


class FaceDetector {
    companion object {
        private val TAG: String = "FaceDetector"
        private val FACE_DETECTION_OPTIONS = FaceDetectorOptions
            .Builder()
            .setLandmarkMode(FaceDetectorOptions.LANDMARK_MODE_ALL)
            .setClassificationMode(FaceDetectorOptions.CLASSIFICATION_MODE_ALL)
            .setPerformanceMode(FaceDetectorOptions.PERFORMANCE_MODE_ACCURATE)
            .build()

        fun detectFaces(image: InputImage): Task<List<Face>> {
            val detector = FaceDetection.getClient(FACE_DETECTION_OPTIONS)
            val taskCompletionSource = TaskCompletionSource<List<Face>>()

            detector.process(image)
                .addOnSuccessListener { faces -> taskCompletionSource.setResult(faces) }
                .addOnFailureListener { error -> taskCompletionSource.setException(error) }

            return taskCompletionSource.task
        }
    }
}