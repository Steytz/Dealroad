import React, {FC} from "react"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import {Text, View} from "react-native"

type THomeTabStack = {[key: string]: {}}

const Tab = createMaterialTopTabNavigator<THomeTabStack>()

const Test1 = () => {
  return <View style={{flex: 1}} />
}

interface Props {
  supermarkets: string[]
}

const SupermarketsTabNavigator: FC<Props> = ({supermarkets}) => {
  if (!supermarkets.length)
    return (
      <View>
        <Text>Something went wrong, we are sorry</Text>
      </View>
    )

  return (
    <Tab.Navigator initialRouteName="testTab1">
      {supermarkets.map((supermarket, index) => (
        <Tab.Screen key={index} name={supermarket} component={Test1} />
      ))}
    </Tab.Navigator>
  )
}

export default SupermarketsTabNavigator
