import React, {createContext, Dispatch, FC, SetStateAction, useContext, useState} from "react"

type TSupermarketsContext = {
  supermarkets: string[]
  setSupermarkets: Dispatch<SetStateAction<string[]>>
  optimizedSupermarkets: string[]
  setOptimizedSupermarkets: Dispatch<SetStateAction<string[]>>
}

const SupermarketsContext = createContext<TSupermarketsContext>({
  supermarkets: [],
  setSupermarkets: () => {},
  optimizedSupermarkets: [],
  setOptimizedSupermarkets: () => {},
})

export const SupermarketsContextProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const [supermarkets, setSupermarkets] = useState<string[]>([])
  const [optimizedSupermarkets, setOptimizedSupermarkets] = useState<string[]>([])

  return (
    <SupermarketsContext.Provider
      value={{supermarkets, setSupermarkets, optimizedSupermarkets, setOptimizedSupermarkets}}>
      {children}
    </SupermarketsContext.Provider>
  )
}

export const useSupermarketsContext = (): TSupermarketsContext => useContext(SupermarketsContext)
