/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {ComponentType, FC} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

const NoPermissionsPlaceholder: FC<{onPress?: () => void}> = ({onPress}) => (
  <View>
    <Text>אין הרשאות למצלמה</Text>
    <Button title="להרשאות" onPress={onPress} />
  </View>
);

const DeviceNotFound: FC = () => (
  <View>
    <Text>לא נמצאה המצלמה המבוקשת</Text>
  </View>
);

const WithCameraPermissions: FC<{Component: ComponentType}> = ({Component}) => {
  const {hasPermission, requestPermission} = useCameraPermission();

  if (!hasPermission) {
    return <NoPermissionsPlaceholder onPress={requestPermission} />;
  }

  return <Component />;
};

const CameraScreen: FC = () => {
  const device = useCameraDevice('front');

  if (!device) return <DeviceNotFound />;

  return <Camera isActive style={styles.fullScreen} device={device} />;
};

const App: FC = () => {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <WithCameraPermissions Component={CameraScreen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});

export default App;
