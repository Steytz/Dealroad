import AsyncStorage from "@react-native-async-storage/async-storage"

type TGetItem = (key: string) => string | {} | Array<unknown>
type TGetCorrectValue = (value: string | Array<unknown> | {}) => string | Array<unknown> | {}

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
