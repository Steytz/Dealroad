import {TIconString} from "@generalComps"

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
    sections: [{title: "Angebote Übersicht", url: "https://www.lidl.de/c/billiger-wochenendlich/a10006502"}],
  },
  "Aldi S": {
    displayName: "Aldi S",
    logo: {logoName: "Aldi S", dimensions: [28, 28]},
    sections: [
      {title: "Frischekracher", url: "https://www.aldi-sued.de/de/angebote/frischekracher.html"},
      {title: "Preisaktion", url: "https://www.aldi-sued.de/de/angebote/preisaktion.html"},
      {title: "Markenaktion", url: "https://www.aldi-sued.de/de/angebote/markenaktion-der-woche.html"},
      {title: "Prospekte", url: "https://www.aldi-sued.de/de/angebote/Prospekte.html"},
    ],
  },
}

export default supportedSupermarkets
