export default function VideosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="flex h-16 items-center px-4">
          <h2 className="text-lg font-semibold">EPIdemo Videos</h2>
        </div>
      </nav>
      {children}
    </div>
  )
}
