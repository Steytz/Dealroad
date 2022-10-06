import React, {FC, memo} from "react"
import {Text, View, ViewStyle} from "react-native"
import {TSupportedSupermarketsElementSection} from "../supportedSupermarkets"
import WebView from "react-native-webview"

interface Props {
  section: TSupportedSupermarketsElementSection
}

const SContainer: ViewStyle = {
  flex: 1,
}

const SupermarketsTabSectionListRenderItem: FC<Props> = ({section: {title, url}}) => {
  return (
    <View style={SContainer}>
      <Text>{title}</Text>
      <WebView source={{uri: url}} />
    </View>
  )
}

export default memo(SupermarketsTabSectionListRenderItem)
