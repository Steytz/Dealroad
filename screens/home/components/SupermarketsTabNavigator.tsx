import React, {FC, useState} from "react"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import NoSupermarkets from "./NoSupermarkets"
import {useSupermarketsContext} from "../../../contexts/SupermarketsContext"
import SupermarketsTabNavigatorChip from "./SupermarketsTabNavigatorChip"
import SupermarketsTab from "./SupermarketsTab"
import supportedSupermarkets from "../supportedSupermarkets"

type THomeTabStack = {[key: string]: {}}

const Tab = createMaterialTopTabNavigator<THomeTabStack>()

interface Props {}

const SupermarketsTabNavigator: FC<Props> = ({}) => {
  const {supermarkets} = useSupermarketsContext()
  const [noSupermarkets, setNoSupermarkets] = useState<boolean>(supermarkets.length <= 0)

  if (noSupermarkets) {
    return <NoSupermarkets setIsNoSupermarketComponentActive={setNoSupermarkets} />
  }

  return (
    <Tab.Navigator>
      {supermarkets.map((supermarket, index) => (
        <Tab.Screen
          key={index}
          name={supermarket}
          children={() => <SupermarketsTab sections={supportedSupermarkets[supermarket].sections} />}
          options={{
            title: ({focused}) => (
              <SupermarketsTabNavigatorChip supermarket={supermarket} focused={focused} />
            ),
            tabBarIndicator: () => null,
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default SupermarketsTabNavigator
