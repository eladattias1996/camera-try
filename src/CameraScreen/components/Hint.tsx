import {FC} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

interface Props {
  message: string;
  style?: TextProps['style'];
}

const Hint: FC<Props> = ({message, style}) => {
  return <Text style={[styles.text, style]}>{message}</Text>;
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'rgba(143, 137, 140, 0.5)',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    padding: 8,
  },
});

export default Hint;
