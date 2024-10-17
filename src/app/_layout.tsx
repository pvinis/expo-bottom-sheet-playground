import { BottomSheetNav } from "@/BottomSheetNav"
import "@/global.css"
import { Providers } from "@/providers"

export default function RootLayout() {
	return (
		<Providers>
			<BottomSheetNav
				screenOptions={{ enableDynamicSizing: false, snapPoints: ["50%"] }}
			></BottomSheetNav>
		</Providers>
	)
}
