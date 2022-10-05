import {Dispatch, SetStateAction, useEffect, useState} from "react"
import {getItem} from "../../utils/async-storage/getItem"
import {setItem} from "../../utils/async-storage/setItem"
import {useSupermarketsContext} from "../../contexts/SupermarketsContext"

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
