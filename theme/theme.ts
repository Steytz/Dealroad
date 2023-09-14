import {palette} from "./palette"

export type TTheme = {
  container: string
  text: string
  svg: string
  switchTrackOff: string
  switchTrackOn: string
  itemsTabNavigator: string
  itemsTabNavigatorChip: string
  itemsTabNavigatorChipFocus: string
  darkModeButton: string
  darkModeButtonBorder: string
  loading: string
  sectionsTabNavigator: string
  addButton: string
}

type TThemes = {
  light: TTheme
  dark: TTheme
}

export const theme: TThemes = {
  light: {
    container: palette.white,
    text: palette.black,
    svg: palette.black,
    switchTrackOff: palette.black,
    switchTrackOn: palette.blue,
    itemsTabNavigator: palette.white,
    itemsTabNavigatorChip: palette.white,
    itemsTabNavigatorChipFocus: palette.blue,
    darkModeButton: palette.blue,
    darkModeButtonBorder: palette.black,
    loading: palette.white,
    sectionsTabNavigator: palette.white,
    addButton: palette.red,
  },
  dark: {
    container: palette.black,
    text: palette.white,
    svg: palette.white,
    switchTrackOff: palette.red,
    switchTrackOn: palette.blue,
    itemsTabNavigator: palette.red,
    itemsTabNavigatorChip: palette.white,
    itemsTabNavigatorChipFocus: palette.black,
    darkModeButton: palette.blue,
    darkModeButtonBorder: palette.white,
    loading: palette.red,
    sectionsTabNavigator: palette.black,
    addButton: palette.red,
  },
}
