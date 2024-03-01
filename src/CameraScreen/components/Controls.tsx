import {FC} from 'react';
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';

interface Props {
  captureDisabled?: boolean;
  onCapturePress: () => void;
  style?: ViewProps['style'];
}

const BUTTON_SIZE = 60;

const Controls: FC<Props> = ({
  captureDisabled = false,
  onCapturePress,
  style,
}) => (
  <View style={[styles.container, style]}>
    <TouchableOpacity
      style={[styles.button, captureDisabled && styles.buttonDisabled]}
      disabled={captureDisabled}
      onPress={onCapturePress}
      activeOpacity={0.5}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    backgroundColor: 'white',
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE,
  },
  buttonDisabled: {
    backgroundColor: 'lightgrey',
  },
});

export default Controls;
