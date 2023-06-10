import React, {FC, useMemo} from "react"
import {ViewStyle} from "react-native"
import {TSupportedSupermarketsElementSection} from "../.."
import SupermarketsWebview from "../supermarket-tab-navigator/SupermarketsWebview"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import {useThemeContext} from "@contexts"
import {TTheme} from "@theme"
import SectionsTabBarNavigationChip from "./SectionsTabBarNavigationChip"

interface Props {
  sections: TSupportedSupermarketsElementSection[]
}

type TSectionTabStack = {[key: string]: {}}

const Tab = createMaterialTopTabNavigator<TSectionTabStack>()

const STabBarItemStyle: ViewStyle = {width: "auto"}

const SFTabBarStyle = (colors: TTheme): ViewStyle => ({
  backgroundColor: colors.sectionsTabNavigator,
})

const SectionsTabNavigator: FC<Props> = ({sections}) => {
  const {colors} = useThemeContext()

  const sectionsRenderer = useMemo(
    () =>
      sections.map((section, index) => (
        <Tab.Screen
          key={index}
          name={section.title}
          children={() => (
            <SupermarketsWebview uri={section.url} selectorRemoveList={section.selectorsToRemove} />
          )}
          options={{
            title: ({focused}) => <SectionsTabBarNavigationChip label={section.title} isFocused={focused} />,
            tabBarIndicator: () => null,
          }}
        />
      )),
    [sections.length],
  )

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: STabBarItemStyle,
        tabBarStyle: SFTabBarStyle(colors),
        swipeEnabled: false,
      }}>
      {sectionsRenderer}
    </Tab.Navigator>
  )
}

export default SectionsTabNavigator
