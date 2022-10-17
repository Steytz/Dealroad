import React, {FC} from "react"
import SupermarketsTabNavigator from "./components/SupermarketsTabNavigator"
import useHome from "./useHome"
import AppFirstOpenWelcome from "./components/AppFirstOpenWelcome"
import Loading from "../../global-components/loading/Loading"
import {ViewStyle} from "react-native"
import {palette} from "../../theme/palette"

const SLoading: ViewStyle = {
  backgroundColor: palette.blue,
}

const Home: FC = () => {
  const {hasAppBeenOpened, setHasAppBeenOpened, isLoading} = useHome()

  if (isLoading) return <Loading loadingItemName="cart" style={SLoading} />

  if (!hasAppBeenOpened) {
    return <AppFirstOpenWelcome setHasAppBeenOpened={setHasAppBeenOpened} />
  }

  return <SupermarketsTabNavigator />
}

export default Home
