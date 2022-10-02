import React, {FC} from "react"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import {View} from "react-native"

type THomeTabStack = {[key: string]: {}}

const Tab = createMaterialTopTabNavigator<THomeTabStack>()

const Test1 = () => {
  return <View style={{flex: 1}} />
}

const TabNavigator: FC = ({}) => {
  return (
    <Tab.Navigator initialRouteName="testTab1">
      <Tab.Screen name="testTab1" component={Test1} />
      <Tab.Screen name="testTab2" component={Test1} />
    </Tab.Navigator>
  )
}

export default TabNavigator
