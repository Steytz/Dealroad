type TSupportedSupermarketsElement = {displayName: string; logo: string; urls: string[]}
type TSupportedSupermarkets = {[key: string]: TSupportedSupermarketsElement}

const supportedSupermarkets: TSupportedSupermarkets = {
  rewe: {displayName: "Rewe", logo: "", urls: []},
  lidl: {displayName: "Lidl", logo: "", urls: []},
  aldiS: {displayName: "Aldi Süd", logo: "", urls: []},
}

export default supportedSupermarkets
