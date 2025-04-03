import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { cookies } from "next/headers"

export default async function DashboardLayout({ children }) {
  // In a real app, you'd check for auth server-side
  // This is a simplified version
  const cookieStore = await cookies()
  const authCookie = cookieStore.get("auth")

  if (!authCookie) {
    // redirect('/login');
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile Header with Navigation */}
        <div className="md:hidden flex items-center justify-between p-4 border-b bg-white">
          <h1 className="text-2xl font-bold text-blue-600">Byte And Board Solutions</h1>
          <MobileNav />
        </div>

        {children}
      </main>
    </div>
  )
}

