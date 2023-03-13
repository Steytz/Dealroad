import React, {FC} from "react"
import {ViewStyle} from "react-native"
import {palette} from "@theme"
import useHome from "./useHome"
import {AppFirstOpenWelcome, SupermarketsTabNavigator} from "./components"
import {Loading} from "@generalComps"

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
