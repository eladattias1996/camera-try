package com.cameratry.extensions

import com.google.mlkit.vision.face.Face

fun Face.toJSObject(): Map<String, Any> {
    val jsObject = mutableMapOf<String, Any>()

    this.rightEyeOpenProbability?.let { jsObject["rightEyeOpenProbability"] = it.toDouble() }
    this.leftEyeOpenProbability?.let { jsObject["leftEyeOpenProbability"] = it.toDouble() }
    this.smilingProbability?.let { jsObject["smilingProbability"] = it.toDouble() }

    return jsObject
}