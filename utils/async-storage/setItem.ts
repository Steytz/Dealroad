import AsyncStorage from '@react-native-async-storage/async-storage';

type TSetItem = (item: string | {}) => void;

export const setItem: TSetItem = async item => {
  const itemType = typeof item;
  try {
    switch (itemType) {
      case 'string':
        await AsyncStorage.setItem('key', item as string);
        return;
      case 'object':
        await AsyncStorage.setItem('key', JSON.stringify(item));
        return;
      default:
        console.warn(
          'Type not supported, please recheck what you are passing in',
        );
    }
  } catch (e) {
    console.error(e);
  }
};
