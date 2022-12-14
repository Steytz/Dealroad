import React, {FC} from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import Home from "../screens/home/Home"
import {SupermarketsContextProvider} from "../contexts/SupermarketsContext"
import {ThemeContextProvider} from "../contexts/ThemeContext"

type TMainStack = {
  Home: {}
}

const Stack = createNativeStackNavigator<TMainStack>()

const MainNavigator: FC = () => {
  return (
    <NavigationContainer>
      <ThemeContextProvider>
        <SupermarketsContextProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          </Stack.Navigator>
        </SupermarketsContextProvider>
      </ThemeContextProvider>
    </NavigationContainer>
  )
}

export default MainNavigator
