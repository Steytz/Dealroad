import {getItem} from "./getItem"
import {setItem} from "./setItem"

type TUpdateArrayItem = (keyToUpdate: string, updateValue: unknown, mode: "add" | "remove") => void

const updateArrayItem: TUpdateArrayItem = async (keyToUpdate, updateValue, mode) => {
  try {
    const arrayToUpdate = (await getItem(keyToUpdate)) as unknown[]
    switch (mode) {
      case "add":
        await setItem(keyToUpdate, [...arrayToUpdate, updateValue])
        break
      case "remove":
        const newArray = arrayToUpdate.filter(item => item != updateValue)
        await setItem(keyToUpdate, newArray)
        break
      default:
        console.warn("Please use a supported case add or remove")
    }
  } catch (e) {
    console.error(e)
  }
}

export default updateArrayItem
