import {Platform} from "react-native"

export const generateUUID = () => {
  const randomFunc = Platform.OS === "android" ? Math.random : () => Math.random()
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (randomFunc() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
