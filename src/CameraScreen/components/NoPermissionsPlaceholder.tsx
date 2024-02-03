import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';

interface Props {
  onPress?: () => void;
}

export const NoPermissionsPlaceholder: FC<Props> = ({onPress}) => (
  <View>
    <Text>אין הרשאות למצלמה</Text>
    <Button title="להרשאות" onPress={onPress} />
  </View>
);
