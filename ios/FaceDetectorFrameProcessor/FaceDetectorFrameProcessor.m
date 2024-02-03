#import <VisionCamera/FrameProcessorPlugin.h>
#import <VisionCamera/FrameProcessorPluginRegistry.h>

#if __has_include("CameraTry/CameraTry-Swift.h")
#import "CameraTry/CameraTry-Swift.h"
#else
#import "CameraTry-Swift.h"
#endif

VISION_EXPORT_SWIFT_FRAME_PROCESSOR(FaceDetectorFrameProcessorPlugin, detectFaces)