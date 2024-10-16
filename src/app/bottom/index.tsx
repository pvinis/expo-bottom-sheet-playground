import { Link } from "expo-router"
import { View, Text } from "react-native"

export default function BottomIndex() {
	return (
		<View className="items-center gap-2 pb-safe">
			<Text className="text-2xl">Bottom initial screen</Text>
			<Link href="/bottom/other">
				<Text>Other bottom screen</Text>
			</Link>
		</View>
	)
}
