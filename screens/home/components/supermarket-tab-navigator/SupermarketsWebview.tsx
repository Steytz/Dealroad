import React, {FC, memo, useCallback, useRef, useState} from "react"
import WebView, {WebViewMessageEvent} from "react-native-webview"
import {Loading} from "@generalComps"
import {ViewStyle} from "react-native"
import {useThemeContext} from "@contexts"
import {useUpdateEffect} from "@utils"

interface Props {
  uri: string
  selectorRemoveList?: string
  optimized: boolean
}

const SLoading: ViewStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}

const handleUnwantedElementsRemoval = (selectorRemoveList: string) => `
  const selectorsToRemove = document.querySelectorAll("${selectorRemoveList}")
  for(let i = 0; i < selectorsToRemove.length; i++ ) selectorsToRemove[i].remove()
  setTimeout(() => window.ReactNativeWebView.postMessage("done"), 1)
  true;
  `

const SupermarketsWebview: FC<Props> = ({uri, selectorRemoveList, optimized}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const {mode} = useThemeContext()
  const webviewRef = useRef<WebView>(null)
  const forceDarkMode = mode === "dark"

  const onWebviewLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  const onWebviewMessage = useCallback((event: WebViewMessageEvent) => {
    if (event.nativeEvent.data === "done") onWebviewLoad()
  }, [])

  const injectedJS =
    selectorRemoveList && optimized ? handleUnwantedElementsRemoval(selectorRemoveList) : undefined
  const onLoad = optimized ? undefined : onWebviewLoad

  useUpdateEffect(() => {
    setIsLoading(true)
    webviewRef?.current?.reload()
  }, [optimized])

  return (
    <>
      <WebView
        ref={webviewRef}
        forceDarkOn={forceDarkMode}
        originWhitelist={["*"]}
        source={{uri: uri}}
        injectedJavaScript={injectedJS}
        onLoad={onLoad}
        onMessage={onWebviewMessage}
      />
      {isLoading && <Loading loadingItemName="price-tag" style={SLoading} />}
    </>
  )
}

export default memo(SupermarketsWebview)
