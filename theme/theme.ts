import {palette} from "./palette"

export type TTheme = {
  container: string
  text: string
  svg: string
  switchTrackOff: string
  switchTrackOn: string
  supermarketsTabNavigator: string
  supermarketsTabNavigatorChip: string
  supermarketsTabNavigatorChipFocus: string
  darkModeButton: string
  darkModeButtonBorder: string
  loading: string
  sectionsTabNavigator: string
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
    supermarketsTabNavigator: palette.white,
    supermarketsTabNavigatorChip: palette.white,
    supermarketsTabNavigatorChipFocus: palette.blue,
    darkModeButton: palette.blue,
    darkModeButtonBorder: palette.black,
    loading: palette.white,
    sectionsTabNavigator: palette.white,
  },
  dark: {
    container: palette.black,
    text: palette.white,
    svg: palette.white,
    switchTrackOff: palette.red,
    switchTrackOn: palette.blue,
    supermarketsTabNavigator: palette.red,
    supermarketsTabNavigatorChip: palette.white,
    supermarketsTabNavigatorChipFocus: palette.black,
    darkModeButton: palette.blue,
    darkModeButtonBorder: palette.white,
    loading: palette.red,
    sectionsTabNavigator: palette.black,
  },
}
