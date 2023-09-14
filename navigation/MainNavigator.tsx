import React, {FC} from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import Home from "../screens/home/Home"
import {ItemsContextProvider, TCustomItem} from "@contexts"
import {ThemeContextProvider} from "@contexts"
import {CustomItemModal} from "../screens/home/components/custom-item"

export type TMainStack = {
  Home: {}
  CustomItemModal: {customItemToEdit?: TCustomItem}
}

const Stack = createNativeStackNavigator<TMainStack>()

const MainNavigator: FC = () => {
  return (
    <NavigationContainer>
      <ThemeContextProvider>
        <ItemsContextProvider>
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation: "transparentModal", headerShown: false}}>
              <Stack.Screen name="CustomItemModal" component={CustomItemModal} />
            </Stack.Group>
          </Stack.Navigator>
        </ItemsContextProvider>
      </ThemeContextProvider>
    </NavigationContainer>
  )
}

export default MainNavigator
