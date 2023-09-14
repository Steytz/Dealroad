import React, {FC, useState} from "react"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import {TTheme} from "@theme"
import {useItemsContext, useThemeContext} from "@contexts"
import {ViewStyle} from "react-native"
import {NoSupermarkets} from "../first-open-welcome"
import SupermarketsTab from "./ItemsTab"
import supportedSupermarkets from "../../supportedSupermarkets"
import SupermarketsTabNavigatorChip from "./ItemsTabNavigatorChip"
import {SettingsTab} from "../settings"
import {TIconString} from "@generalComps"

type THomeTabStack = {[key: string]: {}}

const Tab = createMaterialTopTabNavigator<THomeTabStack>()

interface Props {}

const STabBarItemStyle: ViewStyle = {
  width: 150,
}

const SFTabBarStyle = (colors: TTheme): ViewStyle => ({
  backgroundColor: colors.itemsTabNavigator,
})

const getTabNavTitleSupermarket = (focused: boolean, supermarket: string) => <SupermarketsTabNavigatorChip name={supermarket} focused={focused} logo={supermarket as TIconString} />
const getTabNavTitleCustomItem = (focused: boolean, displayName: string, logo: TIconString) => <SupermarketsTabNavigatorChip name={displayName} focused={focused} logo={logo} />

const ItemsTabNavigator: FC<Props> = ({}) => {
  const {supermarkets, optimizedItems, customItems} = useItemsContext()
  const {colors} = useThemeContext()
  const [noActiveItems, setNoActiveItems] = useState<boolean>(supermarkets.length <= 0 && customItems.length <= 0)

  if (noActiveItems) {
    return <NoSupermarkets setNoActiveItems={setNoActiveItems} />
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: STabBarItemStyle,
        tabBarStyle: SFTabBarStyle(colors),
        swipeEnabled: false,
      }}>
      {supermarkets.map((supermarket, index) => (
        <Tab.Screen
          key={index}
          name={supermarket}
          children={() => <SupermarketsTab sections={supportedSupermarkets[supermarket].sections} optimized={optimizedItems.includes(supermarket)} />}
          options={{
            title: ({focused}: {focused: boolean}) => getTabNavTitleSupermarket(focused, supermarket),
            tabBarIndicator: () => null,
          }}
        />
      ))}
      {customItems.map(
        ({displayName, sections, logo, isActive}, index) =>
          isActive && (
            <Tab.Screen
              key={index}
              name={displayName}
              children={() => <SupermarketsTab sections={sections} optimized={optimizedItems.includes(displayName)} />}
              options={{
                title: ({focused}: {focused: boolean}) => getTabNavTitleCustomItem(focused, displayName, logo || "Rewe"),
                tabBarIndicator: () => null,
              }}
            />
          ),
      )}
      <Tab.Screen
        name="Settings"
        children={() => <SettingsTab />}
        options={{
          title: ({focused}: {focused: boolean}) => getTabNavTitleSupermarket(focused, "Settings"),
          tabBarIndicator: () => null,
        }}
      />
    </Tab.Navigator>
  )
}

export default ItemsTabNavigator
