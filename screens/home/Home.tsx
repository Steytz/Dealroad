import React, {FC} from "react"
import SupermarketsTabNavigator from "./components/SupermarketsTabNavigator"
import {Text, View} from "react-native"
import useHome from "./useHome"

const Home: FC = () => {
  const {hasAppBeenOpened, supermarkets} = useHome()

  if (!hasAppBeenOpened) {
    return (
      <View>
        <Text>View for first time opening app</Text>
      </View>
    )
  }

  if (hasAppBeenOpened && !supermarkets.length) {
    return (
      <View>
        <Text>View for already opened app but did not select any supermarkets</Text>
      </View>
    )
  }

  return <SupermarketsTabNavigator supermarkets={supermarkets} />
}

export default Home
