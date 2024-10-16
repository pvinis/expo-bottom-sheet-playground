const { getDefaultConfig } = require("expo/metro-config")
const { withNativeWind } = require("nativewind/metro")

module.exports = (() => {
	let config = getDefaultConfig(__dirname)

	config = withNativeWind(config, { input: "./src/global.css", inlineRem: 16 })

	return config
})()
