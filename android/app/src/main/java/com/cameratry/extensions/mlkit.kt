package com.cameratry.extensions

import android.graphics.PointF
import android.graphics.Rect
import com.google.mlkit.vision.face.Face
import com.google.mlkit.vision.face.FaceContour
import com.google.mlkit.vision.face.FaceLandmark

fun Face.toJSObject() = mutableMapOf<String, Any>().also { jsObject ->
    jsObject["boundingBox"] = boundingBox.toJSObject()
    rightEyeOpenProbability?.let { jsObject["rightEyeOpenProbability"] = it.toDouble() }
    leftEyeOpenProbability?.let { jsObject["leftEyeOpenProbability"] = it.toDouble() }
    smilingProbability?.let { jsObject["smilingProbability"] = it.toDouble() }
    trackingId?.let { jsObject["trackingId"] = it }
    jsObject["headEulerAngleX"] = headEulerAngleX.toDouble()
    jsObject["headEulerAngleY"] = headEulerAngleY.toDouble()
    jsObject["headEulerAngleZ"] = headEulerAngleZ.toDouble()

    if (allLandmarks.isNotEmpty()) jsObject["allLandmarks"] = allLandmarks.map { it.toJSObject() }
    if (allContours.isNotEmpty()) jsObject["allContours"]  = allContours.map { it.toJSObject() }
}

fun Rect.toJSObject() = mutableMapOf<String, Int>().also {
    it["top"] = top
    it["bottom"] = bottom
    it["left"] = left
    it["right"] = right
}

fun FaceLandmark.toJSObject() = mutableMapOf<String, Any>().also {
    it["landmarkType"] = landmarkType
    it["position"] = position.toJSObject()
}

fun PointF.toJSObject() = mutableMapOf<String, Double>().also {
    it["x"] = x.toDouble()
    it["y"] = y.toDouble()
}

fun FaceContour.toJSObject() = mutableMapOf<String, Any>().also {
    it["faceContourType"] = faceContourType
    it["points"] = points.map {  point -> point.toJSObject() }
}