import "ts-node/register" // this helps to import TypeScript files
import { ExpoConfig } from "expo/config"

const config: ExpoConfig = {
	name: "expo-bottom-sheet-playground",
	slug: "expo-bottom-sheet-playground",
	scheme: "expo-bottom-sheet-playground",
	version: "1.0.0",
	userInterfaceStyle: "light",
	plugins: ["expo-router"],
}
export default config
