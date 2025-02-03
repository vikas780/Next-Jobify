import React from 'react'
import { AreaChart, Layers, AppWindow } from 'lucide-react'

type NavLinks = {
  href: string
  label: string
  icon: React.ReactNode
}

const links: NavLinks[] = [
  {
    href: '/add-job',
    label: 'Add Job',
    icon: <Layers />,
  },
  {
    href: '/jobs',
    label: 'All Jobs',
    icon: <AppWindow />,
  },
  {
    href: '/stats',
    label: 'All Stats',
    icon: <AreaChart />,
  },
]

export default links
