import React, {FC, useMemo} from "react"
import {ViewStyle} from "react-native"
import {TItemsElementSection} from "../.."
import SupermarketsWebview from "../item-tab-navigator/ItemsWebview"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import {useThemeContext} from "@contexts"
import {TTheme} from "@theme"
import SectionsTabBarNavigationChip from "./SectionsTabBarNavigationChip"

interface Props {
  sections: TItemsElementSection[]
  optimized: boolean
}

type TSectionTabStack = {[key: string]: {}}

const Tab = createMaterialTopTabNavigator<TSectionTabStack>()

const STabBarItemStyle: ViewStyle = {width: "auto"}

const SFTabBarStyle = (colors: TTheme): ViewStyle => ({
  backgroundColor: colors.sectionsTabNavigator,
})

const getSectionTabNavTitle = (focused: boolean, title: string) => <SectionsTabBarNavigationChip label={title} isFocused={focused} />

const SectionsTabNavigator: FC<Props> = ({sections, optimized}) => {
  const {colors} = useThemeContext()

  const sectionsRenderer = useMemo(
    () =>
      sections.map((section, index) => (
        <Tab.Screen
          key={index}
          name={section.title}
          children={() => <SupermarketsWebview uri={section.url} selectorRemoveList={section.selectorsToRemove} optimized={optimized} />}
          options={{
            title: ({focused}: {focused: boolean}) => getSectionTabNavTitle(focused, section.title),
            tabBarIndicator: () => null,
          }}
        />
      )),
    [optimized, sections],
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
