type TGetIcon = (icon: TIconString) => number
export type TIconString = "Rewe" | "Lidl" | "Aldi S" | "CryFace" | "Settings" | "LightMode" | "DarkMode"

export const getIcon: TGetIcon = icon => {
  switch (icon) {
    case "Rewe":
      return require("../../assets/svgs/rewe-logo.svg")
    case "Lidl":
      return require("../../assets/svgs/lidl-logo.svg")
    case "Aldi S":
      return require("../../assets/svgs/aldi-s-logo.svg")
    case "CryFace":
      return require("../../assets/svgs/cry-face.svg")
    case "Settings":
      return require("../../assets/svgs/settings-icon.svg")
    case "LightMode":
      return require("../../assets/svgs/light-mode-icon.svg")
    case "DarkMode":
      return require("../../assets/svgs/dark-mode-icon.svg")
  }
}
