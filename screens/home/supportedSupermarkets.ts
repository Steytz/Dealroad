import {TIconString} from "../../global-components/icon/getIcon"
export type TSupportedSupermarketsElementLogo = {logoName: TIconString; dimensions: number[]}
export type TSupportedSupermarketsElementSection = {
  title: string
  url: string
}
type TSupportedSupermarketsElement = {
  displayName: string
  logo: TSupportedSupermarketsElementLogo
  sections: TSupportedSupermarketsElementSection[]
}
export type TSupportedSupermarkets = {[key: string]: TSupportedSupermarketsElement}

const supportedSupermarkets: TSupportedSupermarkets = {
  Rewe: {
    displayName: "Rewe",
    logo: {logoName: "Rewe", dimensions: [28, 28]},
    sections: [{title: "Nationale Angebote", url: "https://www.rewe.de/angebote/nationale-angebote/"}],
  },
  Lidl: {
    displayName: "Lidl",
    logo: {logoName: "Lidl", dimensions: [28, 28]},
    sections: [{title: "", url: ""}],
  },
  "Aldi S": {
    displayName: "Aldi S",
    logo: {logoName: "Aldi S", dimensions: [28, 28]},
    sections: [{title: "", url: ""}],
  },
}

export default supportedSupermarkets
