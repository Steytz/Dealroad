import AsyncStorage from "@react-native-async-storage/async-storage"

type TSetItem = (key: string, value: string | {[key: string]: unknown} | unknown[]) => void

export const setItem: TSetItem = async (key, value) => {
  const itemType = typeof value
  try {
    switch (itemType) {
      case "string":
        await AsyncStorage.setItem(key, value as string)
        return
      case "object":
        await AsyncStorage.setItem(key, JSON.stringify(value))
        return
      default:
        console.warn("Type not supported, please recheck what you are passing in")
    }
  } catch (e) {
    console.error(e)
  }
}
