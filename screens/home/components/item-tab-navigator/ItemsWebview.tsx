import React, {FC, memo, useCallback, useRef, useState} from "react"
import WebView, {WebViewMessageEvent} from "react-native-webview"
import {Loading} from "@generalComps"
import {BackHandler, ViewStyle} from "react-native"
import {useThemeContext} from "@contexts"
import {useUpdateEffect} from "@utils"
import {useFocusEffect} from "@react-navigation/native"

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

const ItemsWebview: FC<Props> = ({uri, selectorRemoveList, optimized}) => {
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

  const injectedJS = selectorRemoveList && optimized ? handleUnwantedElementsRemoval(selectorRemoveList) : undefined
  const onLoad = optimized ? undefined : onWebviewLoad

  const onBackButtonPress = useCallback(() => {
    try {
      webviewRef.current?.goBack()
      return true
    } catch (err) {
      console.log("[handleBackButtonPress] Error : ", err)
      return false
    }
  }, [webviewRef])

  useUpdateEffect(() => {
    setIsLoading(true)
    webviewRef?.current?.reload()
  }, [optimized])

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", onBackButtonPress)
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackButtonPress)
      }
    }, [onBackButtonPress, onBackButtonPress]),
  )

  return (
    <>
      <WebView ref={webviewRef} forceDarkOn={forceDarkMode} originWhitelist={["*"]} source={{uri: uri}} injectedJavaScript={injectedJS} onLoad={onLoad} onMessage={onWebviewMessage} />
      {isLoading && <Loading loadingItemName="price-tag" style={SLoading} />}
    </>
  )
}

export default memo(ItemsWebview)
