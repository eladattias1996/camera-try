package com.cameratry.facedetectorframeprocessor

import com.cameratry.facedetector.FaceDetector
import com.google.android.gms.tasks.Tasks
import com.google.mlkit.vision.common.InputImage
import com.mrousavy.camera.frameprocessor.Frame
import com.mrousavy.camera.frameprocessor.FrameProcessorPlugin
import com.mrousavy.camera.frameprocessor.VisionCameraProxy


class FaceDetectorFrameProcessorPlugin(proxy: VisionCameraProxy, options: Map<String, Any>?): FrameProcessorPlugin() {
  companion object {
    private const val TAG = "FaceDetectorFrameProcessorPlugin"
  }

  override fun callback(frame: Frame, arguments: Map<String, Any>?): Any? {
    val faces = Tasks.await(FaceDetector.detectFaces(getInputImageFromFrame(frame)))

    return faces.size
  }

  private fun getInputImageFromFrame(frame: Frame): InputImage {
    val image = frame.image
    val rotationDegrees = 0 // TODO: calculate it later

    return InputImage.fromMediaImage(image, rotationDegrees)
  }
}