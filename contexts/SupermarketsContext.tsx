import React, {createContext, Dispatch, FC, SetStateAction, useContext, useState} from "react"

type TSupermarketsContext = {
  supermarkets: string[]
  setSupermarkets: Dispatch<SetStateAction<string[]>>
}

const SupermarketsContext = createContext<TSupermarketsContext>({
  supermarkets: [],
  setSupermarkets: () => {},
})

export const SupermarketsContextProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const [supermarkets, setSupermarkets] = useState<string[]>([])

  return (
    <SupermarketsContext.Provider value={{supermarkets, setSupermarkets}}>
      {children}
    </SupermarketsContext.Provider>
  )
}

export const useSupermarketsContext = (): TSupermarketsContext => useContext(SupermarketsContext)
