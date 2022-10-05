import React, {Dispatch, FC, SetStateAction} from "react"
import {Pressable, Text, TextStyle, View, ViewStyle} from "react-native"
import SupermarketSelectionWidget from "./SupermarketSelectionWidget"
import {useSupermarketsContext} from "../../../contexts/SupermarketsContext"

interface Props {
  setIsNoSupermarketComponentActive: Dispatch<SetStateAction<boolean>>
}

const SContainer: ViewStyle = {
  flex: 1,
}

const SHeadingText: TextStyle = {}

const SSubText: TextStyle = {}

const SRefreshButton: ViewStyle = {}

const SRefreshButtonText: TextStyle = {}

const NoSupermarkets: FC<Props> = ({setIsNoSupermarketComponentActive}) => {
  const {supermarkets} = useSupermarketsContext()

  return (
    <View style={SContainer}>
      <Text style={SHeadingText}>You are missing out on deals</Text>
      <Text style={SSubText}>
        Add some supermarkets from our supported list, and when ready please press the refresh button.
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
