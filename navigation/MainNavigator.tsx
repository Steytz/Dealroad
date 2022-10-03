import React, {FC} from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import Home from "../screens/home/Home"

type TMainStack = {
  Home: {}
}

const Stack = createNativeStackNavigator<TMainStack>()

const MainNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
