import { Navigation } from "@/components/Navigation"

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex h-screen">
			<Navigation />
			<main className="flex-1">
				{children}
			</main>
		</div>
	)
}