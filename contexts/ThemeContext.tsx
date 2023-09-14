import React, {createContext, Dispatch, FC, SetStateAction, useContext, useState} from "react"
import {theme, TTheme} from "@theme"
import {TSetItem} from "@utils"

export type TMode = "light" | "dark"

type TThemeContext = {
  mode: TMode
  setMode: Dispatch<SetStateAction<TMode>>
  colors: TTheme
}

type THandleDarkModeToggle = (mode: TMode, setMode: Dispatch<SetStateAction<TMode>>, setItem: TSetItem) => void

const ThemeContext = createContext<TThemeContext>({
  mode: "light",
  setMode: () => {},
  colors: theme.light,
})

export const handleDarkModeToggle: THandleDarkModeToggle = (mode, setMode, setItem) => {
  const whichMode = mode === "light" ? "dark" : "light"
  setMode(whichMode)
  setItem("theme", whichMode)
}

export const ThemeContextProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const [mode, setMode] = useState<TMode>("light")
  const colors = theme[mode]

  return <ThemeContext.Provider value={{mode, setMode, colors}}>{children}</ThemeContext.Provider>
}

export const useThemeContext = (): TThemeContext => useContext(ThemeContext)
