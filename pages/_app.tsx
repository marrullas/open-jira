import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { ligthTheme, darkTheme } from '../themes'
import { UIProvider } from '../context/ui'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={ darkTheme }>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}

export default MyApp
