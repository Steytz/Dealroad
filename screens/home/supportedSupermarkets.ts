import {TIconString} from "../../global-components/icon/getIcon"
export type TSupportedSupermarketsElementLogo = {logoName: TIconString; dimensions: number[]}
type TSupportedSupermarketsElement = {
  displayName: string
  logo: TSupportedSupermarketsElementLogo
  urls: string[]
}
type TSupportedSupermarkets = {[key: string]: TSupportedSupermarketsElement}

const supportedSupermarkets: TSupportedSupermarkets = {
  rewe: {displayName: "Rewe", logo: {logoName: "Rewe", dimensions: [28, 28]}, urls: []},
  lidl: {displayName: "Lidl", logo: {logoName: "Lidl", dimensions: [28, 28]}, urls: []},
  aldiS: {displayName: "Aldi Süd", logo: {logoName: "AldiS", dimensions: [28, 28]}, urls: []},
}

export default supportedSupermarkets
