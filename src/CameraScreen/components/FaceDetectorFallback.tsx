import {FC} from 'react';
import {FallbackComponentProps} from 'react-native-error-boundary';
import {FaceDetectionError, NoCameraDeviceFound} from '../errors/errors';
import {Image, StyleSheet, Text, View} from 'react-native';

type Props = FallbackComponentProps;

const getErrorMessage = (error: unknown) => {
  if (error instanceof FaceDetectionError) {
    return 'התרחשה שגיאה בזיהוי הפנים';
  }

  if (error instanceof NoCameraDeviceFound) {
    return 'לא נמצאה המצלמה המבוקשת';
  }

  return 'התרחשה שגיאה לא ידועה';
};

const FaceDetectorFallback: FC<Props> = ({error}) => (
  <View style={styles.container}>
    <Image style={styles.image} source={require('../../../assets/error.png')} />
    <Text style={styles.text}>{getErrorMessage(error)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    aspectRatio: 'auto',
  },
  text: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    padding: 16,
  },
});

export default FaceDetectorFallback;
