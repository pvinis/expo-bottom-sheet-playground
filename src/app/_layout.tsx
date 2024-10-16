import "@/global.css"
import { Providers } from "@/providers"
import * as Sentry from "@sentry/react-native"
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import {
	createNativeStackNavigator,
	NativeStackNavigationOptions,
} from "@react-navigation/native-stack"
import { withLayoutContext } from "expo-router"

const { Navigator } = createNativeStackNavigator()
export const CustomStackNative = withLayoutContext<
	NativeStackNavigationOptions,
	typeof Navigator
>(Navigator)

export default function RootLayout() {
	return (
		<Providers>
			<CustomStackNative />
		</Providers>
	)
}
