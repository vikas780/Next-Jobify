import { SignOutButton, SignedIn } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <nav className='bg-[var(--background)] border-b border-[var(--foreground)]/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex-shrink-0'>
            <h1 className='text-xl font-semibold text-[var(--foreground)]'>
              Next.js App
            </h1>
          </div>
          <div className='flex items-center gap-4'>
            <SignedIn>
              <Link href='/user-profile'>Profile</Link>
              {/* 🔹 Redirect to "/" after signing out */}
              <Button asChild>
                <SignOutButton redirectUrl='/' />
              </Button>
            </SignedIn>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </nav>
  )
}

export default DashboardLayout
