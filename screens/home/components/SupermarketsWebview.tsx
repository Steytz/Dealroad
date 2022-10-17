import React, {FC, memo, useState} from "react"
import WebView from "react-native-webview"
import Loading from "../../../global-components/loading/Loading"
import {ViewStyle} from "react-native"
import {useThemeContext} from "../../../contexts/ThemeContext"

interface Props {
  uri: string
}

const SLoading: ViewStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}

const SupermarketsWebview: FC<Props> = ({uri}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const {mode} = useThemeContext()
  const forceDarkMode = mode === "dark"

  const onWebviewLoad = () => {
    setIsLoading(false)
  }

  return (
    <>
      <WebView
        forceDarkOn={forceDarkMode}
        originWhitelist={["*"]}
        source={{uri: uri}}
        onLoad={onWebviewLoad}
      />
      {isLoading && <Loading loadingItemName="price-tag" style={SLoading} />}
    </>
  )
}

export default memo(SupermarketsWebview)
