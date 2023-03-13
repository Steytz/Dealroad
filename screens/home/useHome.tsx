import {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react"
import {TMode, useSupermarketsContext, useThemeContext} from "@contexts"
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
  const {supermarkets, setSupermarkets} = useSupermarketsContext()
  const {setMode} = useThemeContext()

  const handleAppOpen: THandleAppOpen = useCallback(async () => {
    const hasOpenedApp = await getItem("hasOpenedApp")

    if (!hasOpenedApp) {
      setItem("hasOpenedApp", "true")
      setItem("supermarkets", [])
      setItem("theme", "light")
      setHasAppBeenOpened(false)
    }

    if (hasOpenedApp) {
      const theme = await getItem("theme")
      setMode(theme as TMode)
      setHasAppBeenOpened(true)
      const supermarkets = await getItem("supermarkets")
      if (supermarkets) setSupermarkets(supermarkets as string[])
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }, [supermarkets.length])

  useEffect(() => {
    if (hasAppBeenOpened === undefined) {
      handleAppOpen()
    }
  }, [])

  return {hasAppBeenOpened, setHasAppBeenOpened, supermarkets, setSupermarkets, isLoading}
}

export default useHome
