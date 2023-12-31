import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      >
          <Toaster />
          <Component {...pageProps} />
      
      </ThemeProvider>

  )
}
