'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null // Avoid rendering the children until mounted
  }
  if (resolvedTheme === 'dark') {
    return <Sun size={24} onClick={() => setTheme('light')} />
  }
  if (resolvedTheme === 'light') {
    return <Moon size={24} onClick={() => setTheme('dark')} />
  }
}

export default ThemeSwitcher
