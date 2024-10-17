import { createBottomSheetNavigator } from "@th3rdwave/react-navigation-bottom-sheet"
import { withLayoutContext } from "expo-router"
import { BottomSheetNavigationOptions } from "@th3rdwave/react-navigation-bottom-sheet"

const { Navigator } = createBottomSheetNavigator()

export const BottomSheetNav = withLayoutContext<
	BottomSheetNavigationOptions,
	typeof Navigator
>(Navigator)
