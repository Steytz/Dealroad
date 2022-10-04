import React, {FC} from "react"
import SupermarketsTabNavigator from "./components/SupermarketsTabNavigator"
import {Pressable, Text, View} from "react-native"
import useHome from "./useHome"
import {setItem} from "../../utils/async-storage/setItem"
import {getItem} from "../../utils/async-storage/getItem"
import AppFirstOpenWelcome from "./components/AppFirstOpenWelcome"

const Home: FC = () => {
  const {hasAppBeenOpened, setHasAppBeenOpened, supermarkets, setSupermarkets, isLoading} = useHome()

  if (isLoading) return null

  if (!hasAppBeenOpened) {
    return <AppFirstOpenWelcome setHasAppBeenOpened={setHasAppBeenOpened} setSupermarkets={setSupermarkets} />
  }

  if (hasAppBeenOpened && !supermarkets.length) {
    return (
      <View>
        <Text>View for already opened app but did not select any supermarkets</Text>
        <Pressable onPress={() => setItem("hasOpenedApp", "false")}>
          <Text>Set Supermarkets</Text>
        </Pressable>
        <Pressable onPress={() => getItem("supermarkets")}>
          <Text>Get Supermarkets</Text>
        </Pressable>
      </View>
    )
  }

  return <SupermarketsTabNavigator supermarkets={supermarkets} />
}

export default Home
