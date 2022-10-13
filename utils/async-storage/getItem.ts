import AsyncStorage from "@react-native-async-storage/async-storage"
type TValue = string | {[key: string]: unknown} | Array<unknown> | undefined
type TGetItem = (key: string) => Promise<TValue>
type TGetCorrectValue = (value: TValue) => TValue

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
