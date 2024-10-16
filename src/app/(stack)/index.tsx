import { Link, useRouter } from "expo-router"
import { View, Text } from "react-native"

export default function Index() {
	const router = useRouter()
	return (
		<View className="flex-1 items-center gap-2">
			<Text className="text-2xl">Home screen</Text>
			<Link href="/_sitemap">
				<Text>Sitemap</Text>
			</Link>
			<Link href="/second">
				<Text>Second screen</Text>
			</Link>
			<Link href="/bottom">
				<Text>Open other stack</Text>
			</Link>
		</View>
	)
}
