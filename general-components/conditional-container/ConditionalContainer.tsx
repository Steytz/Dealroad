import React, {FC, ReactElement} from "react"

interface Props {
  condition: boolean
  container: (children: React.ReactNode) => ReactElement
  children: ReactElement
}

export const ConditionalContainer: FC<Props> = ({container, condition, children}) => {
  return condition ? container(children) : children
}
