import {FC} from 'react';
import {Button, StyleSheet, View} from 'react-native';

interface Props {
  captureDisabled?: boolean;
  onCapturePress: () => void;
}

const Footer: FC<Props> = ({captureDisabled = false, onCapturePress}) => (
  <View style={styles.container}>
    <Button title="צלם" disabled={captureDisabled} onPress={onCapturePress} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default Footer;
