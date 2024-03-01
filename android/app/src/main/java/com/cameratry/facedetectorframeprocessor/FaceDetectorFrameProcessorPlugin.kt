package com.cameratry.facedetectorframeprocessor

import android.util.Log
import com.cameratry.extensions.toJSObject
import com.cameratry.facedetector.FaceDetector
import com.google.android.gms.tasks.Tasks
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.face.FaceDetectorOptions
import com.mrousavy.camera.frameprocessor.Frame
import com.mrousavy.camera.frameprocessor.FrameProcessorPlugin
import com.mrousavy.camera.frameprocessor.VisionCameraProxy


class FaceDetectorFrameProcessorPlugin(proxy: VisionCameraProxy, options: Map<String, Any>?): FrameProcessorPlugin() {
  companion object {
    private const val TAG = "FaceDetectorFrameProcessorPlugin"

    private fun getFaceDetectorOptions(options: Map<String, Any>): FaceDetectorOptions = with(FaceDetectorOptions.Builder()) {
        options["landmarkMode"]?.let { setLandmarkMode((it as Double).toInt()) }
        options["contourMode"]?.let { setContourMode((it as Double).toInt()) }
        options["classificationMode"]?.let { setClassificationMode((it as Double).toInt()) }
        options["performanceMode"]?.let { setPerformanceMode((it as Double).toInt()) }
        options["trackingEnabled"]?.let { if (it == true) enableTracking() }
        options["minFaceSize"]?.let { setMinFaceSize((it as Double).toFloat()) }

        build()
      }
  }

  override fun callback(frame: Frame, arguments: Map<String, Any>?): Any? {
    return try {
      val faces = Tasks.await(FaceDetector.detectFaces(getInputImageFromFrame(frame), getFaceDetectorOptions(
        arguments ?: mapOf()
      )))

      faces.map { it.toJSObject() }
    } catch (e: Exception) {
      // TODO: refactor to raise exception over the bridge
      Log.e(TAG, "found error $e")

      listOf<Any>()
    }
  }

  private fun getInputImageFromFrame(frame: Frame): InputImage {
    val image = frame.image
    val rotationDegrees = 0 // TODO: calculate it later

    return InputImage.fromMediaImage(image, rotationDegrees)
  }
}