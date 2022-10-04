import {Dispatch, SetStateAction, useEffect, useState} from "react"
import {getItem} from "../../utils/async-storage/getItem"
import {setItem} from "../../utils/async-storage/setItem"

type TUseHome = () => {
  hasAppBeenOpened: undefined | boolean
  supermarkets: string[]
  setHasAppBeenOpened: Dispatch<SetStateAction<boolean | undefined>>
  setSupermarkets: Dispatch<SetStateAction<string[]>>
  isLoading: boolean
}
type THandleAppOpen = () => Promise<void>

const useHome: TUseHome = () => {
  const [hasAppBeenOpened, setHasAppBeenOpened] = useState<boolean>()
  const [supermarkets, setSupermarkets] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleAppOpen: THandleAppOpen = async () => {
    const hasOpenedApp = await getItem("hasOpenedApp")

    if (!hasOpenedApp) {
      await setItem("hasOpenedApp", "true")
      await setItem("supermarkets", [])
      setHasAppBeenOpened(false)
    }

    if (hasOpenedApp) {
      setHasAppBeenOpened(true)
      const supermarkets = await getItem("supermarkets")
      if (supermarkets) setSupermarkets(supermarkets as string[])
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (hasAppBeenOpened === undefined) {
      handleAppOpen()
    }
  }, [])

  return {hasAppBeenOpened, setHasAppBeenOpened, supermarkets, setSupermarkets, isLoading}
}

export default useHome
