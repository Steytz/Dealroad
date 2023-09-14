import React, {createContext, Dispatch, FC, SetStateAction, useContext, useState} from "react"
import {TItemsElementSection} from "@screens"
import {TIconString} from "@generalComps"

export type TCustomItem = {
  id: string
  displayName: string
  logo: TIconString | ""
  sections: TItemsElementSection[]
  isActive: boolean
}

export type TItemsContext = {
  supermarkets: string[]
  setSupermarkets: Dispatch<SetStateAction<string[]>>
  optimizedItems: string[]
  setOptimizedItems: Dispatch<SetStateAction<string[]>>
  customItems: TCustomItem[]
  setCustomItems: Dispatch<SetStateAction<TCustomItem[]>>
}

const ItemsContext = createContext<TItemsContext>({
  supermarkets: [],
  setSupermarkets: () => {},
  optimizedItems: [],
  setOptimizedItems: () => {},
  customItems: [],
  setCustomItems: () => {},
})

export const ItemsContextProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const [supermarkets, setSupermarkets] = useState<string[]>([])
  const [optimizedItems, setOptimizedItems] = useState<string[]>([])
  const [customItems, setCustomItems] = useState<TCustomItem[]>([])

  const context: TItemsContext = {
    supermarkets,
    setSupermarkets,
    optimizedItems,
    setOptimizedItems,
    customItems,
    setCustomItems,
  }

  return <ItemsContext.Provider value={context}>{children}</ItemsContext.Provider>
}

export const useItemsContext = (): TItemsContext => useContext(ItemsContext)
