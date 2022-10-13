import React, {FC, memo} from "react"
import WebView from "react-native-webview"

interface Props {
  uri: string
}

const SupermarketsWebview: FC<Props> = ({uri}) => {
  return <WebView originWhitelist={["*"]} source={{uri: uri}} />
}

export default memo(SupermarketsWebview)
