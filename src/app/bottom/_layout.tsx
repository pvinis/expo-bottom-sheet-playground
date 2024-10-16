// import { Slot } from "expo-router"
import { ParamListBase, StackNavigationState } from "@react-navigation/native"
import {
	createStackNavigator,
	StackNavigationEventMap,
	StackNavigationOptions,
} from "@react-navigation/stack"
import { withLayoutContext } from "expo-router"
import { View } from "react-native"

const { Navigator } = createStackNavigator()

export const JsStack = withLayoutContext<
	StackNavigationOptions,
	typeof Navigator,
	StackNavigationState<ParamListBase>,
	StackNavigationEventMap
>(Navigator)
export default () => <JsStack screenOptions={{ headerShown: false }} />
