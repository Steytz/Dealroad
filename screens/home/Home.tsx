import React, {FC} from "react"
import SupermarketsTabNavigator from "./components/SupermarketsTabNavigator"
import useHome from "./useHome"
import AppFirstOpenWelcome from "./components/AppFirstOpenWelcome"

const Home: FC = () => {
  const {hasAppBeenOpened, setHasAppBeenOpened, isLoading} = useHome()

  if (isLoading) return null //TODO add spinner or loading view

  if (!hasAppBeenOpened) {
    return <AppFirstOpenWelcome setHasAppBeenOpened={setHasAppBeenOpened} />
  }

  return <SupermarketsTabNavigator />
}

export default Home
