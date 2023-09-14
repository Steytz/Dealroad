import React, {FC, useMemo} from "react"
import {ImageStyle, Pressable, TextStyle, View, ViewStyle} from "react-native"
import {useItemsContext, useThemeContext} from "@contexts"
import {SvgIcon, Text} from "@generalComps"
import {spacing} from "@theme"
import {useNavigation} from "@react-navigation/native"
import {TMainStack} from "../../../../navigation/MainNavigator"
import {CustomItemSelectionEmptyAnimationBtn} from "./CustomItemSelectionEmptyAnimationBtn"
import {CustomItemSelectionWidget} from "./CustomItemSelectionWidget"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"

const SSupermarketsWidgetText: TextStyle = {
  fontWeight: "bold",
}

const SHeaderContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const SAddIconStyle: ImageStyle = {
  marginLeft: spacing[0],
  width: 30,
  height: 30,
}

const SFAddButton = (pressed: boolean): ViewStyle => ({
  opacity: pressed ? 0.1 : 1,
})
interface Props {}

const CustomItemSelection: FC<Props> = ({}) => {
  const {colors} = useThemeContext()
  const navigation = useNavigation<NativeStackNavigationProp<TMainStack>>()
  const {customItems} = useItemsContext()
  const hasCustomItems = customItems.length

  const widgetBody = useMemo(() => {
    if (!hasCustomItems) return <CustomItemSelectionEmptyAnimationBtn />
    return <CustomItemSelectionWidget />
  }, [hasCustomItems])

  return (
    <>
      <View style={SHeaderContainer}>
        <Text style={SSupermarketsWidgetText} text="Toggle Custom Added Supermarkets" />
        <Pressable style={({pressed}) => SFAddButton(pressed)} onPress={() => navigation.navigate("CustomItemModal", {})}>
          <SvgIcon iconString="AddCircle" iconStyle={SAddIconStyle} color={colors.addButton} />
        </Pressable>
      </View>
      {widgetBody}
    </>
  )
}

export default CustomItemSelection
