import React, {FC, useState} from "react"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import {Pressable, Text, View} from "react-native"
import NoSupermarkets from "./NoSupermarkets"
import {useSupermarketsContext} from "../../../contexts/SupermarketsContext"
import {setItem} from "../../../utils/async-storage/setItem"
import SupermarketsTabNavigatorItem from "./SupermarketsTabNavigatorItem"

type THomeTabStack = {[key: string]: {}}

const Tab = createMaterialTopTabNavigator<THomeTabStack>()

const Test1 = () => {
  return (
    <View style={{flex: 1}}>
      <Pressable
        onPress={() => {
          setItem("hasOpenedApp", "false")
          setItem("supermarkets", [])
        }}>
        <Text>Total Reset</Text>
      </Pressable>
    </View>
  )
}

interface Props {}

const SupermarketsTabNavigator: FC<Props> = ({}) => {
  const {supermarkets} = useSupermarketsContext()
  const [noSupermarkets, setNoSupermarkets] = useState<boolean>(supermarkets.length <= 0)

  if (noSupermarkets) {
    return <NoSupermarkets setIsNoSupermarketComponentActive={setNoSupermarkets} />
  }
  return (
    <Tab.Navigator initialRouteName="testTab1">
      {supermarkets.map((supermarket, index) => (
        <Tab.Screen
          key={index}
          name={supermarket}
          component={Test1}
          options={{
            title: ({focused}) => (
              <SupermarketsTabNavigatorItem supermarket={supermarket} focused={focused} />
            ),
            tabBarIndicator: () => null,
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default SupermarketsTabNavigator
