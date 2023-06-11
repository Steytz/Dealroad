import {DependencyList, EffectCallback, useEffect} from "react"
import {useIsFirstRender} from "./useIsFirstRender"

export const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const isFirstRender = useIsFirstRender()

  useEffect(() => {
    if (!isFirstRender) return effect()
  }, deps)
}
