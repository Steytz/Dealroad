import AsyncStorage from "@react-native-async-storage/async-storage"

type TGetItem = (key: string) => string | {} | []
type TGetCorrectValue = (value: string | Array<string> | {}) => string | Array<string> | {}

const getCorrectValue: TGetCorrectValue = value => {
  try {
    return JSON.parse(value as string)
  } catch {
    return value
  }
}

export const getItem: TGetItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value) {
      return getCorrectValue(value)
    }
  } catch (e) {
    console.error(e)
  }
}
