import { SignOutButton, SignedIn, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/ui/Appsidebar'

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='bg-[#0f141e] text-white'>
        <header className=' flex items-center justify-between h-16 shrink-0  gap-2 border-b p-4'>
          <SidebarTrigger className='-ml-1' />
          <div className='flex gap-4 items-center'>
            <SignedIn>
              <UserButton />
              {/* 🔹 Redirect to "/" after signing out */}
              <Button asChild className='bg-gray-700'>
                <SignOutButton redirectUrl='/' />
              </Button>
            </SignedIn>
          </div>
        </header>
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
    // <div>
    //   <nav className='bg-[var(--background)] border-b border-[var(--foreground)]/10'>
    //     <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
    //       <div className='flex justify-between h-16 items-center'>
    //         <div className='flex-shrink-0'>
    //           <h1 className='text-xl font-semibold text-[var(--foreground)]'>
    //             Next.js App
    //           </h1>
    //         </div>
    // <div className='flex items-center gap-4'>
    //   <SignedIn>
    //     <UserButton />
    //     {/* 🔹 Redirect to "/" after signing out */}
    //     <Button asChild>
    //       <SignOutButton redirectUrl='/' />
    //     </Button>
    //   </SignedIn>
    // </div>
    //       </div>
    //     </div>
    //   </nav>
    //   <div>{children}</div>
    // </div>
  )
}

export default DashboardLayout
