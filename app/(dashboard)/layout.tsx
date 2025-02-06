import { SignOutButton, SignedIn, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/ui/Appsidebar'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className='dark:bg-[#0f141e] bg-[#f2f2f2] '>
        <header className=' flex items-center justify-between h-16 shrink-0  gap-2  p-4 shadow-md'>
          <SidebarTrigger className='-ml-1' />

          <div className='flex gap-4 items-center'>
            <SignedIn>
              <UserButton />
              {/* 🔹 Redirect to "/" after signing out */}
              <Button asChild>
                <SignOutButton redirectUrl='/' />
              </Button>
            </SignedIn>
            <ThemeSwitcher />
          </div>
        </header>
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
