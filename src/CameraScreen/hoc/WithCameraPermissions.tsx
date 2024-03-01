import React, {ComponentType, FC} from 'react';
import {useCameraPermission} from 'react-native-vision-camera';
import {NoPermissionsPlaceholder} from '../components';

interface Props {
  Component: ComponentType;
}

export const WithCameraPermissions: FC<Props> = ({Component}) => {
  const {hasPermission, requestPermission} = useCameraPermission();

  if (!hasPermission) {
    return <NoPermissionsPlaceholder onPress={requestPermission} />;
  }

  return <Component />;
};
