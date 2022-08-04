import { ThemeProvider } from '@mui/material'
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import '../styles/globals.css'
import { GetCharacterResults } from '../types'
import Main from './Main'

const theme = unstable_createMuiStrictModeTheme()

function MyApp() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Main />
			</ThemeProvider>
		</>
	)
}
export default MyApp
