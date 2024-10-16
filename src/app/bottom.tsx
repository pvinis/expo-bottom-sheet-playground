import { Link } from "expo-router"
import { View, Text } from "react-native"

export default function BottomIndex() {
	return (
		<View className="flex-1 items-center gap-2 pt-safe">
			<Text className="text-2xl">Bottom initial screen</Text>
			<Link href="/other">
				<Text>Other bottom screen</Text>
			</Link>
		</View>
	)
}
