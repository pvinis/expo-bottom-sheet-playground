import { PropsWithChildren } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export function Providers({ children }: PropsWithChildren) {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaProvider>
				{/**/}
				{children}
				{/**/}
			</SafeAreaProvider>
		</GestureHandlerRootView>
	)
}
