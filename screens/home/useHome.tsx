import {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react"
import {TCustomItem, TMode, useItemsContext, useThemeContext} from "@contexts"
import {getItem, setItem} from "@utils"

type TUseHome = () => {
  hasAppBeenOpened: undefined | boolean
  setHasAppBeenOpened: Dispatch<SetStateAction<boolean | undefined>>
  isLoading: boolean
}
type THandleAppOpen = () => Promise<void>

const useHome: TUseHome = () => {
  const [hasAppBeenOpened, setHasAppBeenOpened] = useState<boolean>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const {supermarkets, setSupermarkets, setOptimizedItems, setCustomItems} = useItemsContext()
  const {setMode} = useThemeContext()

  const handleAppOpen: THandleAppOpen = useCallback(async () => {
    const hasOpenedApp = await getItem("hasOpenedApp")

    if (!hasOpenedApp) {
      setItem("hasOpenedApp", "true")
      setItem("supermarkets", [])
      setItem("customItems", [])
      setItem("optimizedItems", [])
      setItem("theme", "light")
      setHasAppBeenOpened(false)
    }

    if (hasOpenedApp) {
      const theme = await getItem("theme")
      setMode(theme as TMode)
      setHasAppBeenOpened(true)
      const supermarketsFromStorage = await getItem("supermarkets")
      const customItems = await getItem("customItems")
      const optimizedItems = await getItem("optimizedItems")

      if (supermarketsFromStorage) {
        setSupermarkets(supermarketsFromStorage as string[])
      }
      if (customItems) {
        setCustomItems(customItems as TCustomItem[])
      }
      if (optimizedItems) {
        setOptimizedItems(optimizedItems as string[])
      }
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
  }, [supermarkets.length])

  useEffect(() => {
    if (hasAppBeenOpened === undefined) {
      handleAppOpen()
    }
  }, [])

  return {hasAppBeenOpened, setHasAppBeenOpened, supermarkets, setSupermarkets, isLoading}
}

export default useHome
