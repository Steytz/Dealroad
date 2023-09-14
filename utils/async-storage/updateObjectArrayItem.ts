import {getItem, setItem} from "@utils"

type TUpdateObjectArrayItemParams<ItemTypeGeneric> = {
  keyToUpdate: string
  mode: "add" | "updateAndMove" | "update" | "remove"
  itemForOperation: ItemTypeGeneric
  identifier?: keyof ItemTypeGeneric
}

type TUpdateObjectArrayItem = <ItemTypeGeneric>(params: TUpdateObjectArrayItemParams<ItemTypeGeneric>) => Promise<void>

export const updateObjectArrayItem: TUpdateObjectArrayItem = async ({keyToUpdate, mode, itemForOperation, identifier}) => {
  try {
    if (mode === "remove" && !identifier) {
      return console.warn("identifierToRemoveFrom is required for the 'remove' mode.")
    }

    const arrayToUpdate = ((await getItem(keyToUpdate)) as any[]) || []

    switch (mode) {
      case "add":
        setItem(keyToUpdate, [...arrayToUpdate, itemForOperation])
        break
      case "update":
        if (identifier) {
          const newArray = [...arrayToUpdate]
          const itemToUpdateIndex = newArray.findIndex(item => item[identifier] === itemForOperation[identifier])
          newArray.splice(itemToUpdateIndex, 1, itemForOperation)
          setItem(keyToUpdate, newArray)
        }
        break
      case "updateAndMove":
        if (identifier) {
          const newArray = arrayToUpdate.filter(item => item[identifier] !== itemForOperation[identifier])
          setItem(keyToUpdate, [...newArray, itemForOperation])
        }
        break
      case "remove":
        if (identifier) {
          const newArray = arrayToUpdate.filter(item => item[identifier] !== itemForOperation[identifier])
          setItem(keyToUpdate, newArray)
        }
        break
      default:
        console.warn("Please use a supported mode")
    }
  } catch (e) {
    console.error(e)
  }
}
