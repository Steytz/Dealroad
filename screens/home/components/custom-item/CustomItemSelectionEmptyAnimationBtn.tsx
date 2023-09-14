import React, {FC} from "react"
import {Pressable, ViewStyle} from "react-native"
import NoCustomItems from "./NoCustomItems"
import {useNavigation} from "@react-navigation/native"
import {TMainStack} from "../../../../navigation/MainNavigator"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"

interface Props {}

const SFAddButton = (pressed: boolean): ViewStyle => ({
  opacity: pressed ? 0.1 : 1,
})

export const CustomItemSelectionEmptyAnimationBtn: FC<Props> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<TMainStack>>()

  return (
    <Pressable style={({pressed}) => SFAddButton(pressed)} onPress={() => navigation.navigate("CustomItemModal", {})}>
      <NoCustomItems />
    </Pressable>
  )
}
