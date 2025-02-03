import links from '@/utils/links'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

// Menu items.

export function AppSidebar() {
  return (
    <Sidebar variant='inset'>
      <SidebarContent>
        <SidebarGroup className='p-4'>
          <Image src={logo} alt='Logo image' />

          <SidebarGroupContent>
            <SidebarMenu className='lg:flex flex-col gap-6 justify-center items-center mt-14'>
              {links.map((item, idx) => (
                <SidebarMenuItem key={idx}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className='p-6'>
                      {item.icon}

                      <span className='text-lg font-medium'>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
