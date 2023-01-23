import {Alert} from 'react-native';

type AlertAttr = {
  title?: string;
  message?: string;
  onPressOk?: Function;
  onPressCancel: Function;
  ok: string;
  cancel: string;
};
const createTwoButtonAlert = (options: AlertAttr) => {
  const {
    title = 'Alert',
    message = '',
    ok = 'OK',
    onPressOk,
    onPressCancel,
    cancel = 'Cancel',
  } = options || {};
  return Alert.alert(title, message, [
    {
      text: cancel,
      style: 'cancel',
      onPress: () => onPressCancel,
    },
    {
      text: ok,
      style: 'default',
      onPress: () => onPressOk,
    },
  ]);
};

export default createTwoButtonAlert;
