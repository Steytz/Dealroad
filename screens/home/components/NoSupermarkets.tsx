import React, {Dispatch, FC, SetStateAction} from "react"
import {Pressable, Text, TextStyle, useWindowDimensions, View, ViewStyle} from "react-native"
import SupermarketSelectionWidget from "./SupermarketSelectionWidget"
import {useSupermarketsContext} from "../../../contexts/SupermarketsContext"
import SvgIcon from "../../../global-components/icon/SvgIcon"
import {palette} from "../../../theme/palette"

interface Props {
  setIsNoSupermarketComponentActive: Dispatch<SetStateAction<boolean>>
}

const SContainer: ViewStyle = {
  flex: 1,
  paddingHorizontal: 14,
}

const SHeadingText: TextStyle = {
  color: palette.red,
  fontSize: 24,
  fontWeight: "bold",
  textAlign: "center",
  marginTop: 21,
}

const SSubText: TextStyle = {
  fontSize: 16,
  alignSelf: "center",
  color: palette.black,
  marginTop: 14,
}

const SRefreshButton: ViewStyle = {
  backgroundColor: palette.blue,
  alignSelf: "center",
  paddingHorizontal: 35,
  paddingVertical: 7,
  borderRadius: 15,
  marginTop: 21,
}

const SRefreshButtonText: TextStyle = {
  color: palette.black,
  fontSize: 18,
  fontWeight: "500",
}

const NoSupermarkets: FC<Props> = ({setIsNoSupermarketComponentActive}) => {
  const {supermarkets} = useSupermarketsContext()
  const {width} = useWindowDimensions()
  const svgDimension = width / 2.3

  return (
    <View style={SContainer}>
      <SvgIcon
        iconStyle={{width: svgDimension, height: svgDimension, alignSelf: "center", marginTop: 49}}
        iconString="CryFace"
      />
      <Text style={SHeadingText}>You are missing out on deals</Text>
      <Text style={SSubText}>
        Add some supermarkets from our{"\n"}supported list, and when ready{"\n"}please press the refresh
        button.
      </Text>
      <SupermarketSelectionWidget />
      <Pressable
        disabled={supermarkets.length <= 0}
        onPress={() => setIsNoSupermarketComponentActive(false)}
        style={SRefreshButton}>
        <Text style={SRefreshButtonText}>Refresh</Text>
      </Pressable>
    </View>
  )
}

export default NoSupermarkets
