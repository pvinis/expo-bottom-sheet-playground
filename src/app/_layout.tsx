import "@/global.css"
import { BottomSheetNav } from "@/BottomSheetNav"
import { Providers } from "@/providers"

export default function RootLayout() {
	return (
		<Providers>
			<BottomSheetNav
				screenOptions={{ enableDynamicSizing: false, snapPoints: ["50%"] }}
			/>
		</Providers>
	)
}
